import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request/request.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-viveros',
  templateUrl: './crear-viveros.component.html',
  styleUrls: ['./crear-viveros.component.scss']
})
export class CrearViverosComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
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
      direccion: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      telefonos: ''
    });

    this.thirdFormGroup = this.formBuilder.group({
      horarios: ''
    });

  }

  ngOnDestroy(): void{
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  submit(): void{

    // Extraer valores del formulario

    const nombre: string = this.firstFormGroup.get('nombre').value;
    const direccion: string = this.firstFormGroup.get('direccion').value;
    const telefonos: string = this.secondFormGroup.get('telefonos').value;
    const horarios: string = this.thirdFormGroup.get('horarios').value;

    // Enviar al servicio que hace requests al API
    this.subscription = this.requestService.addVivero(
      nombre,
      direccion,
      telefonos.length !== 0 ? telefonos : 'NO INDICA',
      horarios.length !== 0 ? horarios : 'NO INDICA'
    ).subscribe( res => {

      if (res){
        this.snackBar.open('Se ha creado el vivero con éxito', 'Entendido', { duration: 2000, });

      }else{
        this.snackBar.open('Ocurrió un error o el vivero ya existe', 'Entendido', { duration: 5000, });
      }
      return this.router.navigateByUrl('home/listaViveros');

    });
  }

}

// For forms: import FormsModule and ReactiveForms Ref: https://stackoverflow.com/a/40250319
