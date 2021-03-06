import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { sharedConfig } from './app.module.shared';
import { UserService } from './service/user.service';
import { MaterialModule } from '@angular/material';
import { LoginComponent  } from './components/app/login/login.component';
//import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http';
// import { CovalentHighlightModule } from '@covalent/highlight';
// import { CovalentMarkdownModule } from '@covalent/markdown';
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations:[LoginComponent, sharedConfig.declarations],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
				//CovalentLayoutModule,
   // CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    // CovalentHttpModule.forRoot(),
    // CovalentHighlightModule,
    // CovalentMarkdownModule,
    // CovalentDynamicFormsModule,
      BrowserAnimationsModule,
	  MaterialModule,

        ...sharedConfig.imports
    ],

    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin, },UserService
    ],
	entryComponents: [LoginComponent],

})
export class AppModule {
}
