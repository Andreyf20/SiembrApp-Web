import { RequestService } from 'src/app/services/request/request.service';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Planta } from 'src/app/models/Planta';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-plantas-datatable',
  templateUrl: './plantas-datatable.component.html',
  styleUrls: ['./plantas-datatable.component.scss']
})
export class PlantasDatatableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  plantas: Planta[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  plantasSub: Subscription;

  private parentURL = '/home';
  constructor(
    private requestService: RequestService,
    private router: Router
    ) { }

  // Cannot reinitialize datatable error fix: https://stackoverflow.com/a/49648807 
  ngOnInit(): void {

    this.plantasSub = this.requestService.getPlantas().subscribe(res => {
      let i = 0;
      res.forEach(element => {
        console.log(i++);
        this.plantas.push(element as Planta);
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
    this.plantasSub.unsubscribe();
  }

  rowClick(targetPlanta: Planta): void{
    console.log(targetPlanta.nombrecomun);

    this.router.navigate([this.parentURL + '/detallesPlanta'], { queryParams: { ...targetPlanta }} ).then( () => {
      location.reload();
    });
  }
}
