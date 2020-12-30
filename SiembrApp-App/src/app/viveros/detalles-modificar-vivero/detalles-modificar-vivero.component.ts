import { RequestService } from 'src/app/services/request/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vivero } from 'src/app/models/Vivero';


@Component({
  selector: 'app-detalles-modificar-vivero',
  templateUrl: './detalles-modificar-vivero.component.html',
  styleUrls: ['./detalles-modificar-vivero.component.scss']
})
export class DetallesModificarViveroComponent implements OnInit {

  // Atributos
  nombre = '';
  direccion = '';
  telefonos = '';
  horarios = '';

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private requestService: RequestService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe( params => {

      this.nombre = params.nombre;
      this.direccion = params.direccion;
      this.telefonos = params.telefonos;
      this.horarios = params.horarios;

    });
  }

  /**
   * Actualiza los datos del vivero
   */
  actualizarDatosVivero(): void{

    const confirm = prompt('¿Está seguro de actualizar los datos del vivero? (Escriba "si" para confirmar)');

    if (confirm === 'si'){

    // Enviar al servicio que hace requests al API
    this.requestService.modificarDatosVivero(
      this.nombre,
      this.direccion,
      this.telefonos.length !== 0 ? this.telefonos : 'NO INDICA',
      this.horarios.length !== 0 ? this.horarios : 'NO INDICA'

    ).subscribe( res => {

      if (res){
        this.snackBar.open('Se han modificado los datos del vivero con éxito', 'Entendido', { duration: 5000, });
        this.router.navigateByUrl('home/listaViveros');
        return;
      }else{
        this.snackBar.open('Ocurrió un error', 'Entendido', { duration: 5000, });
      }

    });

    }else{
      this.snackBar.open('No se actualizaron los datos', 'Entendido', { duration: 2000 });
    }

  }
}
