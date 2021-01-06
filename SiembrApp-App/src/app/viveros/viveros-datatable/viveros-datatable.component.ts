import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Vivero } from 'src/app/models/Vivero';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-viveros-datatable',
  templateUrl: './viveros-datatable.component.html',
  styleUrls: ['./viveros-datatable.component.scss']
})
export class ViverosDatatableComponent implements OnInit, OnDestroy {

  public viveros: Vivero[];
  private parentURL = '/home';
  private getSub: Subscription;
  private eliminateSub: Subscription;
  
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private requestService: RequestService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {

    // Datatables installation: http://l-lin.github.io/angular-datatables/#/getting-started
    // Datatables angular.json config: https://therichpost.com/angular-11-datatable-working-example/
    // Datatable example: https://l-lin.github.io/angular-datatables/#/basic/angular-way
    // Call api to fill viveros

    this.getSub = this.requestService.getViveros().subscribe( res => {

        // res es un arreglo con viveros
        this.viveros = res;

        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      }
    );
  }

  ngOnDestroy(): void{
      this.dtTrigger.unsubscribe();
      if (this.getSub){
        this.getSub.unsubscribe();
      }
      if (this.eliminateSub){
        this.eliminateSub.unsubscribe();
      }

  }

  rowClick(targetVivero: Vivero): void{
    console.log('Vivero =>' + targetVivero.nombre);
    // Send object through queryParams ref: https://stackoverflow.com/a/52253395
    this.router.navigate([this.parentURL + '/detalles'], { queryParams: { ...targetVivero }} );
  }

  eliminar(nombre: string): void{
    const confirm = prompt(`¿Está seguro de eliminar el vivero ${nombre}? (Digite "${nombre}" para confirmar)`);

    if (confirm === nombre){
      // Enviar al servicio que hace requests al API
      this.eliminateSub = this.requestService.eliminarVivero(nombre).subscribe( res => {

        if (res){
          this.router.navigateByUrl('/listaViveros');
          alert(`${nombre} eliminado exitosamente`);
          location.reload();
          return;
        }else{
          this.snackbar.open(`Ocurrió un error en la eliminación de ${nombre}`, 'Entendido', { duration: 5000, });
        }
      });

    }else{
      alert(`No se eliminó ${nombre}`);
    }
  }

}
