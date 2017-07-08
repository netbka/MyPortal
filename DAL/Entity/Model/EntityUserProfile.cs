using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyPortal.DAL.Entity.Base.Interfaces;

namespace MyPortal.DAL.Entity.Model
{
	public class EntityUserProfile:IdentityUser, IUser,IAuditableEntity
    {
		[StringLength(32)]
		public string FirstName { get; set; }
		[StringLength(32)]
        public string LastName { get; set; }
		[StringLength(32)]
        public string MiddleName { get; set; }
        public string FullName()
		{
			return String.Format("{0} {1} {2}", this.LastName, this.FirstName, this.MiddleName );
		}
		[MaxLength(256)]
        public string UserCreated { get; set; }
        [MaxLength(256)]
        public string UserModified { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
	//  public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
    //     {
    //         // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
    //         var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
    //         // Add custom user claims here
    //         return userIdentity;
    //     }
}
