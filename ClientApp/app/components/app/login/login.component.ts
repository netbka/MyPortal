import { Component, HostBinding } from '@angular/core';
import { TdDynamicType, ITdDynamicElementConfig, TdDynamicElement } from '@covalent/dynamic-forms';
//import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'login',
	//templateUrl: './login.component.html',
	templateUrl: '/account/login',
	styleUrls: ['./login.component.css'],

})
export class LoginComponent {

	constructor() { }
	//  constructor(public dialogRef: MdDialogRef<LoginComponent>) {}

	dynamicFormsAttrs: any[] = [{
		description: `JS Object that will render the elements depending on its config.
                  [name] property is required.`,
		name: 'elements',
		type: 'ITdDynamicElementConfig[]',
	}, {
		description: `Getter property for dynamic [FormGroup].`,
		name: 'form',
		type: 'get(): FormGroup',
	}, {
		description: `Getter property for [valid] of dynamic [FormGroup].`,
		name: 'valid',
		type: 'get(): boolean',
	}, {
		description: `Getter property for [value] of dynamic [FormGroup].`,
		name: 'value',
		type: 'get(): any',
	}, {
		description: `Getter property for [errors] of dynamic [FormGroup].`,
		name: 'errors',
		type: 'get(): {[name: string]: any}',
	}, {
		description: `Getter property for [controls] of dynamic [FormGroup].`,
		name: 'controls',
		type: 'get(): {[key: string]: AbstractControl}',
	}];

	textElements: ITdDynamicElementConfig[] = [
		{
			name: 'required-input',
			label: 'Ваш Email',
			type: TdDynamicElement.Input,
			required: true,
		}, {
			name: 'required-password',
			label: 'Password Label',
			type: TdDynamicElement.Password,
			required: true,
		}];

}
