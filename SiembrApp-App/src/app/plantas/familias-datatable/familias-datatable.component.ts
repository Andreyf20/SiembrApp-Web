import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Familia } from 'src/app/models/Planta';

@Component({
  selector: 'app-familias-datatable',
  templateUrl: './familias-datatable.component.html',
  styleUrls: ['./familias-datatable.component.scss']
})
export class FamiliasDatatableComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject<any>();

  familias: Familia[];

  constructor() { }

  ngOnInit(): void {

    // Todo: bd getFamilias sp

  }

}
