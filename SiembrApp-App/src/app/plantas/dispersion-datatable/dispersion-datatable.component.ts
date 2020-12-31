import { MetodoDispersion } from './../../models/Planta';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dispersion-datatable',
  templateUrl: './dispersion-datatable.component.html',
  styleUrls: ['./dispersion-datatable.component.scss']
})
export class DispersionDatatableComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject<any>();

  metodosdedispersion: MetodoDispersion[];

  constructor() { }

  ngOnInit(): void {

  }

}
