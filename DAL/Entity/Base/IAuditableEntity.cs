using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyPortal.DAL.Entity.Base.Interfaces
{
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

		public AuditableEntity(){
			DateCreated = DateTime.Now;
			DateModified = DateTime.Now;
		}

    }

}
