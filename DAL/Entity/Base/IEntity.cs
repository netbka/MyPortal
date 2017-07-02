using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyPortal.DAL.Entity.Base.Interfaces
{
 public interface IEntity<T>
    {
        T Id { get; set; }
    }
	 public abstract class BaseEntity
    {
    }

    public abstract class Entity<T> : BaseEntity, IEntity<T>
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public virtual T Id { get; set; }
    }
	public interface IAuditableEntity
    {
        DateTime DateCreated { get; set; }
        string UserCreated { get; set; }
        DateTime DateModified { get; set; }
        string UserModified { get; set; }
    }
	public abstract class AuditableEntity<T> : Entity<T>, IAuditableEntity
    {
        [MaxLength(256)]
        [ScaffoldColumn(false)]
        [DisplayName("Создано")]
        public string UserCreated { get; set; }

        [MaxLength(256)]
        [ScaffoldColumn(false)]
        [DisplayName("Изменено")]
        public string UserModified { get; set; }

        [ScaffoldColumn(false)]
        [DisplayName("Дата создания")]
        public DateTime DateCreated { get; set; }

        [ScaffoldColumn(false)]
        [DisplayName("Дата изменения")]
        public DateTime DateModified { get; set; }


    }
	 public abstract class UserInfo:AuditableEntity<long>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
		public string FullName()
		{
			return String.Format("{0} {1} {2}", this.LastName, this.FirstName, this.MiddleName );
		}

    }
}
