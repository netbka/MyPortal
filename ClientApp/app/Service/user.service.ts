import { Injectable } from '@angular/core';
import { IUser } from '../Interface/IUser';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { Observer } from 'rxjs/Observer';
//import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';



@Injectable()
export class UserService {
	public userProfile: IUser;
	//private observable: Observable<any>;;
	//private userProfile= new BehaviorSubject(undefined);// BehaviorSubject<any>;
	url: string = "/profile/GetUserProfile";
	private observable = null;
	//private fetching: boolean;
	constructor(private _http: Http) {
		//	console.log("init service");
	}

	// getUserProfile(): Observable<User> {
	// 	return this.userProfile.asObservable();
	// }


	loadUserProfile(): Observable<IUser> {


		if (this.observable == null) {
			this.observable = this._http.get(this.url).share()
				//.map((response: Response) =>this.userProfile = <IUser>response.json())
				.map((response: Response) => <IUser>response.json())
				.do(data => this.userProfile = <IUser>data)
				// .map((response: Response) => response.json())
				.catch(this.handleError);
		}
		return this.observable;
	}

	getUserInitials(): string {
		return this.userProfile.lastName + " " + this.userProfile.firstName;
	}


	//  private createObservable(data: any): Observable<any> {
	//         return Observable.create((observer: Observer<any>) => {
	//             observer.next(data);
	//             observer.complete();
	//         });
	//     }

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error || "Server error");
	}
}
