import { Component, OnInit, ViewChild , OnChanges, SimpleChanges, Input } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer'

@Component({
  selector: 'app-problem-viewer',
  templateUrl: './problem-viewer.component.html',
  styleUrls: ['./problem-viewer.component.css']
})
export class ProblemViewerComponent implements OnInit, OnChanges {
  @ViewChild(PdfViewerComponent, { static: false })
  private pdfComponent!: PdfViewerComponent;
  @Input() pdfLink = "";
  pdfSrc = "";
  // @Input() pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes : SimpleChanges) {
    if(changes.pdfLink) {
      this.pdfSrc = this.pdfLink;
    }
  }

  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }
  totalPages: number = 0;
  page: number = 1;
  isLoaded: boolean = false;


     nextPage() {
        this.page += 1;
      }

      previousPage() {
        this.page -= 1;
      }

  afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
      }
  

}
