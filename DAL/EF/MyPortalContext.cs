using System;

using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyPortal.DAL.Entity.Base.Interfaces;
using MyPortal.DAL.Entity.Model;

namespace MyPortal.DAL.EF
{
    public class MyPortalContext : IdentityDbContext<EntityUserProfile>
    {
		private string curuser;
        public MyPortalContext(DbContextOptions options,UserResolverService userService) : base(options)
        {
				string _user =userService.GetUser();
				curuser = String.IsNullOrEmpty(_user)?"System":_user;
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            builder.Entity<EntityUserProfile>(entity =>
            {
                entity.ToTable(name: "EntityUserProfile");
            });

        }

        //DbSet<TEntity> Set<TEntity>() where TEntity : class;
        //DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
        //int SaveChanges();
		public override int SaveChanges()
        {
            var modifiedEntries = ChangeTracker.Entries()
                .Where(x => x.Entity is IAuditableEntity
                    && (x.State == EntityState.Added || x.State == EntityState.Modified));
             var currentUsername =curuser;
			// !string.IsNullOrEmpty(HttpContext.User?.Identity?.Name)
            //     ? HttpContext.Current.User.Identity.Name                : "SYSTEM";
            foreach (var entry in modifiedEntries)
            {
                IAuditableEntity entity = entry.Entity as IAuditableEntity;
                if (entity != null)
                {
                    //string identityName = Thread.CurrentPrincipal.Identity.Name;
                    DateTime now = DateTime.Now;
                    if (entry.State == EntityState.Added)
                    {
                        entity.UserCreated = currentUsername;
                        entity.DateCreated = now;
                    }
                    else
                    {
                        base.Entry(entity).Property(x => x.UserCreated).IsModified = false;
                        base.Entry(entity).Property(x => x.DateCreated).IsModified = false;
                    }
                    entity.UserModified = currentUsername;
                    entity.DateModified = now;
                }
            }
            return base.SaveChanges();
        }
    }

	public class UserResolverService
{
      private readonly IHttpContextAccessor _context;
      private readonly UserManager<EntityUserProfile> _userManager;
      public UserResolverService(IHttpContextAccessor context, UserManager<EntityUserProfile> userManager)
      {
            _context = context;
            _userManager = userManager;
      }
      public string GetUser()
      {
            return _context.HttpContext.User?.Identity?.Name;
      }
}
}
