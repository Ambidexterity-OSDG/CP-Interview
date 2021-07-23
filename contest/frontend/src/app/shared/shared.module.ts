import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemViewerComponent } from './components/problem-viewer/problem-viewer.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { TableComponent } from './components/table/table.component';
import {CustomMaterialModule} from '../custom-material.module';
import { PdfDialogComponent } from './components/pdf-dialog/pdf-dialog.component';


@NgModule({
  declarations: [
    ProblemViewerComponent,
    TableComponent,
    PdfDialogComponent
  ],
  entryComponents:[
    PdfDialogComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    CustomMaterialModule
  ],
  exports:[
    ProblemViewerComponent,
    TableComponent
  ]
})
export class SharedModule { }
