import { RequestService } from 'src/app/services/request/request.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Planta } from 'src/app/models/Planta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas-datatable',
  templateUrl: './plantas-datatable.component.html',
  styleUrls: ['./plantas-datatable.component.scss']
})
export class PlantasDatatableComponent implements OnInit, OnDestroy {

  plantas: Planta[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  private parentURL = '/home';
  constructor(
    private requestService: RequestService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.requestService.getPlantas().subscribe(res => {

      res.forEach(element => {

        this.plantas.push(element as Planta);

        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });

    });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  rowClick(targetPlanta: Planta): void{
    console.log(targetPlanta.nombrecomun);

    this.router.navigate([this.parentURL + '/detallesPlanta'], { queryParams: { ...targetPlanta }} ).then( () => {
      location.reload();
    });
  }
}
