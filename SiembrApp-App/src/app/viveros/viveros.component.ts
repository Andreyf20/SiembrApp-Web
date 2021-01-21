import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viveros',
  templateUrl: './viveros.component.html',
  styleUrls: ['./viveros.component.scss']
})
export class ViverosComponent implements OnInit{

  public executing: number;
  public parentURL = '/home';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   this.executing = -1;
  }

  // OnClickListeners
  verViverosClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaViveros');
  }

  crearViveroClick(newVal: number): void{
    this.router.navigateByUrl(this.parentURL + '/crearVivero');
  }

  back(): void{
    this.executing = -1;
    this.router.navigateByUrl(this.parentURL);
  }
}
