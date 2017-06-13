using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyPortal.Controllers
{
    public class ProfileController : Controller
    {
        [HttpGet]
        public VMUserProfile GetUserProfile()
        {
            var model = new VMUserProfile
            {
                LastName = "Мамруков",
                FirstName = "Петр",
                MiddleName = "Георгиевич",
                Position = "CTO|CIO|VP R&D"
            };
            return model;
        }

        public class VMUserProfile
        {
            public string LastName { get; set; }
            public string FirstName { get; set; }
            public string MiddleName { get; set; }
            public string Position { get; set; }
        }
    }
}
