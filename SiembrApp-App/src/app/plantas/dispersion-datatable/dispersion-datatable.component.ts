import { MetodoDispersion } from './../../models/Planta';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-dispersion-datatable',
  templateUrl: './dispersion-datatable.component.html',
  styleUrls: ['./dispersion-datatable.component.scss']
})
export class DispersionDatatableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  metodosdedispersion: MetodoDispersion[] = [];

  metodosdedispersionSub: Subscription;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {

    this.metodosdedispersionSub = this.requestService.getMetodosDispersion().subscribe(res => {

      res.forEach(element => {

        this.metodosdedispersion.push(element as MetodoDispersion);

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
    this.metodosdedispersionSub.unsubscribe();
  }

}
