import { Fenologia } from './../../models/Planta';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { MetodoDispersion, Familia } from 'src/app/models/Planta';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-fenologias-datatable',
  templateUrl: './fenologias-datatable.component.html',
  styleUrls: ['./fenologias-datatable.component.scss']
})
export class FenologiasDatatableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  fenologias: Fenologia[] = [];

  fenologiasSub: Subscription;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {

    this.fenologiasSub = this.requestService.getFenologias().subscribe(res => {

      res.forEach(element => {

        this.fenologias.push(element as Fenologia);

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
    this.fenologiasSub.unsubscribe();
  }

}
