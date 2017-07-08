using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MyPortal.DAL.EF;
using MyPortal.DAL.Entity.Base.Interfaces;

namespace MyPortal.DAL.Repository
{
    public interface IRepository<T> : IDisposable where T : IEntity<T>
    {
		T GetById(Guid Id);
        void Create(T entity);
        void Delete(T entity);
        IEnumerable<T> GetAll();
        void Update(T entity);

    }

    public abstract class BaseRepository<T> : IRepository<T> where T : Entity<T>
    {
        protected MyPortalContext _context;
        protected DbSet<T> _dbset;

        public BaseRepository(MyPortalContext context)
        {
            _context = context;
            _dbset = _context.Set<T>();
        }

        public void Delete(T entity)
        {
            _dbset.Remove(entity);
            _context.SaveChanges();
        }

        public T GetById(Guid Id)
        {
            return _dbset.Where(e => e.Id.Equals(Id)).SingleOrDefault();
        }

        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>().AsEnumerable();
        }

        public void Create(T entity)
        {
            if (entity == null)
                throw new ArgumentException("passed entity is null");

            _dbset.Add(entity);
            _context.SaveChanges();
        }

        public void Update(T entity)
        {
            if (entity == null)
                throw new ArgumentException("passed entity is null");
            _context.SaveChanges();
        }

        public void Dispose()
        {
			_dbset = null;
			_context.Dispose();
            GC.SuppressFinalize(this);
        }


    }

}
