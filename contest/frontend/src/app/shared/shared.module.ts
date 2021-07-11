import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemViewerComponent } from './components/problem-viewer/problem-viewer.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    ProblemViewerComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  exports:[ProblemViewerComponent]
})
export class SharedModule { }
