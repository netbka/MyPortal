import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BootstrapMaterialModule } from './app.module.material';
import { CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';

//import { CoavalentModule } from './app.module.coavalent';

//import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http';
// import { CovalentHighlightModule } from '@covalent/highlight';
// import { CovalentMarkdownModule } from '@covalent/markdown';
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

export const sharedConfig: NgModule = {
	bootstrap: [AppComponent],
	declarations: [

		NavMenuComponent,
		CounterComponent,
		FetchDataComponent,
		HomeComponent,
		AppComponent,
	],
	providers: [

	],
	imports: [
		FlexLayoutModule,
		CovalentLayoutModule,
		//		TdMediaService,
		//CovalentStepsModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'counter', component: CounterComponent },
			{ path: 'fetch-data', component: FetchDataComponent },
			{ path: '**', redirectTo: 'home' }
		]),

		BootstrapMaterialModule,

		// (optional) Additional Covalent Modules imports
		// CovalentHttpModule.forRoot(),
		// CovalentHighlightModule,
		// CovalentMarkdownModule,
		// CovalentDynamicFormsModule,
	],

};
