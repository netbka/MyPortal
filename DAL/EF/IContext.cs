// using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Microsoft.EntityFrameworkCore;

namespace MyPortal.DAL.EF
{
    public interface  IContext
	{

		DbSet<TEntity> Set<TEntity>() where TEntity : class;
        //DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
        int SaveChanges();
    }
}
