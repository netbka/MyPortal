export interface IUser {
	firstName: string;
	lastName: string;
	middleName: string;
	position: string;
	//getInitials(): string;
	// getInitials():string {
	// 	return this.lastName + ' ' + this.firstName.substring(0,1) +'.';
	// }
}

// export class User implements IUser {
// 	firstName: string;
// 	lastName: string;
// 	middleName: string;
// 	position: string;
// 	constructor(
// 		public _lastName: string="",
// 		public _firstName: string="",
// 		public _middleName: string="",
// 		public _position: string=""
// 	) {
// 		this.lastName = _lastName;
// 		this.firstName = _firstName;
// 		this.middleName = _middleName;
// 		this.position = _position;

// 	}
// 	getInitials(): string {
// 		return this.lastName + ' ' + this.firstName.substring(0, 1) + '.';
// 	}
// }
