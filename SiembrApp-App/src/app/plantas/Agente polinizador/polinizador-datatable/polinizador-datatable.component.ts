import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { Fenologia, AgentePolinizador } from 'src/app/models/Planta';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-polinizador-datatable',
  templateUrl: './polinizador-datatable.component.html',
  styleUrls: ['./polinizador-datatable.component.scss']
})
export class PolinizadorDatatableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();

  polinizadores: AgentePolinizador[] = [];

  polinizadoresSub: Subscription;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {

    this.polinizadoresSub = this.requestService.getAgentesPolinizadores().subscribe(res => {

      res.forEach(element => {

        this.polinizadores.push(element as Fenologia);

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
    this.polinizadoresSub.unsubscribe();
  }

}
