import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {PdfDialogComponent} from '../pdf-dialog/pdf-dialog.component';
import {ContestService} from '../../../components/services/contest.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnChanges {
  @Input() tableData: any;
  @Input() tableCol: any;
  // @Input() buttonVisible: boolean = false;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];
  displayedColumnsObject: any;
  constructor(private dialog: MatDialog, private contestService: ContestService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges): void {
    if(changes.tableCol) {
      this.displayedColumnsObject = this.tableCol;
      this.displayedColumns = this.tableCol.map((col: { display: any; }) => col.display);
      console.log(this.displayedColumns,this.displayedColumnsObject);
    }
    if(changes.tableData) {
      console.log(this.tableData);
      this.dataSource = new MatTableDataSource(this.tableData);
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async openContent(event: any) {
    this.contestService.getPdfLink(event.queContest, event.problemId).subscribe(
      (res) =>{
        if(res.fileUrl){
          let dialogref = this.dialog.open(PdfDialogComponent,{
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            data : { pdfUrl : res.fileUrl}
          });
      
          dialogref.afterClosed().subscribe((res) => {
            console.warn(res);
          })
        }
      }
    )

  }

}
