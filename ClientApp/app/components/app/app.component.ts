import { Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry, Dir } from '@angular/material';
import { MdSidenav } from '@angular/material';
import { UserService } from '../../service/user.service';
import { IUser } from '../../interface/IUser';
import { Observable } from 'rxjs/Observable';
//import { TdMediaService } from '@covalent/core';
const pathToSmallAvatar = require('../../../assets/img/avatarSmall.png');
@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None,
	//providers: [UserService]

})
export class AppComponent implements OnInit {
	isDarkTheme: boolean = true;
	avatarSmallPath: string = pathToSmallAvatar;
	showSmallAvatar: boolean = false;
	//userProfile: Observable<IUser>;// = new User("","","","");
	userProfile:IUser;//Observable<IUser>;// = new Observable<IUser>();

	errorMessage: string;
	@ViewChild("sideNav")
	sideNav: MdSidenav;

	constructor(
		private _changeDetectorRef: ChangeDetectorRef,
		private _userService:UserService,
		//public media: TdMediaService,
	) {}




	ngOnInit(): void {
		this._userService.loadUserProfile()
		.subscribe(_userProfile=>{this.userProfile=_userProfile},
		error=>this.errorMessage=<any>error);
 		//this.userProfile = this._userService.loadUserProfile();

	}

	getInitials(): string {

		//return (this.userProfile!=undefined)?this.userProfile.lastName:"";//this.userProfile.lastName;
		return this._userService.getUserInitials();
	}

	ngAfterViewInit(): void {
		//	this.media.broadcast();
		this._changeDetectorRef.detectChanges();
	}

	toggleMenu(): void {
		this.showSmallAvatar = !this.showSmallAvatar;
		//console.log(this.userProfile);
		this.sideNav.toggle();
	}
}

