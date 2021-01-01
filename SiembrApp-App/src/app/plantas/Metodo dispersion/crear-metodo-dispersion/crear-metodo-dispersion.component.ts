import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-crear-metodo-dispersion',
  templateUrl: './crear-metodo-dispersion.component.html',
  styleUrls: ['./crear-metodo-dispersion.component.scss']
})
export class CrearMetodoDispersionComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnDestroy(): void{
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  submit(): void{
    const nombre: string = this.firstFormGroup.get('nombre').value;

    // Enviar al servicio que hace requests al API
    this.subscription = this.requestService.crearMetodoDispersion(
      nombre
    ).subscribe( res => {
      console.log(res);
      if (res){
        this.snackBar.open('Se ha creado el método de dispersión con éxito', 'Entendido', { duration: 2000, });

      }else{
        this.snackBar.open('Ocurrió un error o el método ya existe', 'Entendido', { duration: 5000, });
      }
      return this.router.navigateByUrl('home/listaMetodosDispersion').then(() => { location.reload(); });

    });
  }

}
