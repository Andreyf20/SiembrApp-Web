import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viveros',
  templateUrl: './viveros.component.html',
  styleUrls: ['./viveros.component.scss']
})
export class ViverosComponent implements OnInit{

  public executing = -1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.router.navigateByUrl(this.router.url + '/listaViveros');

  }

  changeExecutionMode(newVal: number): void{
    this.executing = newVal;
  }

}
