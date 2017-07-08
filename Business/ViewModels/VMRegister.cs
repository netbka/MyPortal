using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace MyPortal.Business.ViewModels
{
	public class VMRegister
    {
		[Required]
        [Display(Name = "Email")]
        [EmailAddress(ErrorMessage = "Ошибка в поле Email")]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "Ошибка в поле Email")]
        [Remote("CheckIfEmailExists", "Account", ErrorMessage = "Email уже занят")]
        public string Email { get; set; }



    }
}
