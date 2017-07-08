using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyPortal.DAL.Entity.Base.Interfaces
{
	 public interface IUser
    {
        string FirstName { get; set; }
        string LastName { get; set; }
        string MiddleName { get; set; }
		string FullName();
		// {
		// 	//return String.Format("{0} {1} {2}", this.LastName, this.FirstName, this.MiddleName );
		// }

    }
}
