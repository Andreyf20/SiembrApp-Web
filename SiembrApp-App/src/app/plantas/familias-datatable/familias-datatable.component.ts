import { RequestService } from 'src/app/services/request/request.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Familia } from 'src/app/models/Planta';

@Component({
  selector: 'app-familias-datatable',
  templateUrl: './familias-datatable.component.html',
  styleUrls: ['./familias-datatable.component.scss']
})
export class FamiliasDatatableComponent implements OnInit, OnDestroy {

  dtTrigger: Subject<any> = new Subject<any>();

  familias: Familia[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    const table = $('#familiasdt').DataTable();
    table.destroy();

    this.requestService.getFamilias().subscribe(res => {

      res.forEach(element => {

        this.familias.push(element as Familia);

        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });

    });

  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

}
