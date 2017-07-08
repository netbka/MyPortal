import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interface/IUser';
import { UserService } from '../../service/user.service';

import { Observable } from 'rxjs/Observable';

const pathToAvatar = require('../../../assets/img/avatar.jpg');

@Component({
	selector: 'nav-menu',
	templateUrl: './navmenu.component.html',
	styleUrls: ['./navmenu.component.css'],

})
export class NavMenuComponent implements OnInit {
	avatarPath: string = pathToAvatar;
	userProfile:IUser;// = new Observable<IUser>();
	//lastname$:Observable<string>
	errorMessage: string;
	//subscription: Subscription;

	constructor(private _userService: UserService) {

	 }


	ngOnInit(): void {
		this._userService.loadUserProfile()
			.subscribe((_userProfile) =>{ this.userProfile = _userProfile
		},
			error => this.errorMessage = <any>error);
		// this.userProfile = this._userService.loadUserProfile();
		// this.lastname= this.userProfile.map(user => user.lastName);


	}

	ngOnDestroy() {
		// unsubscribe to ensure no memory leaks
		 // this._userService.unsubscribe();
	}

	getInitials(): string {

		//return (this.userProfile!=undefined)?this.userProfile.lastName:"";//this.userProfile.lastName;
		return this._userService.getUserInitials();
	}

	routes: Object[] = [{
		title: 'Home',
		route: '/',
		icon: 'home',
	}, {
		title: 'Data from server',
		route: '/fetch-data',
		icon: 'view_quilt',
	}, {
		title: 'Product Logs',
		route: '/logs',
		icon: 'receipt',
	}, {
		title: 'Manage Users',
		route: '/users',
		icon: 'people',
	}, {
		title: 'Covalent Templates',
		route: '/templates',
		icon: 'view_module',
	},];
}
