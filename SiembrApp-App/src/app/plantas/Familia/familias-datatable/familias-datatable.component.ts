import { RequestService } from 'src/app/services/request/request.service';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Familia } from 'src/app/models/Planta';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-familias-datatable',
  templateUrl: './familias-datatable.component.html',
  styleUrls: ['./familias-datatable.component.scss']
})
export class FamiliasDatatableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  familias: Familia[] = [];

  familiaSub: Subscription;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {

    this.familiaSub = this.requestService.getFamilias().subscribe(res => {

      res.forEach(element => {

        this.familias.push(element as Familia);

      });
      this.rerender();
    });
  }

  ngAfterViewInit(): void {this.dtTrigger.next(); }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
       dtInstance.destroy();
       this.dtTrigger.next();
   });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
    this.familiaSub.unsubscribe();
  }

}
