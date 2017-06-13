import { NgModule } from '@angular/core';
import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

//  CovalentLayoutModule,
//     CovalentStepsModule,
//     // (optional) Additional Covalent Modules imports
//     CovalentHttpModule.forRoot(),
//     CovalentHighlightModule,
//     CovalentMarkdownModule,
//     CovalentDynamicFormsModule,
@NgModule({
  imports: [

CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
  ],

})
export class CoavalentModule {}
