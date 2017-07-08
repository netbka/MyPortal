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

    public abstract class Entity<T> : IEntity<T>
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public virtual T Id { get; set; }
    }


}
