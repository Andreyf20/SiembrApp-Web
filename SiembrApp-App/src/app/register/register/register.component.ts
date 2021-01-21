import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  tipoorganizacionVal = '';
  razonVal = '';
  isAdmin: boolean;

  opSub: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.firstFormGroup = this.formBuilder.group({

      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasenna: ['', Validators.required],
      verificacion: ['', Validators.required]

    });

    this.secondFormGroup = this.formBuilder.group({
      // Hay botones
    });

    this.thirdFormGroup = this.formBuilder.group({
      // Hay botones
    });

  }

  ngOnDestroy(): void{
    if (this.opSub){
      this.opSub.unsubscribe();
    }
  }

  setTipoorganizacion(val: string): void{
    this.tipoorganizacionVal = val;
  }

  setRazon(val: string): void{
    this.razonVal = val;
  }

  setIsAdmin(val: string): void{
    this.isAdmin = (val === '1');
  }

  submit(): void{

    const contrasennaGot = this.firstFormGroup.get('contrasenna').value;
    const verificacionGot = this.firstFormGroup.get('verificacion').value;

    if (contrasennaGot === verificacionGot){ // Contraseña y su verificacion son iguales
      const nombreCompleto = this.firstFormGroup.get('nombre').value + ' ' + this.firstFormGroup.get('apellidos').value;
      const correoGot = this.firstFormGroup.get('correo').value;

      this.opSub = this.requestService.registrarUsuario(
        nombreCompleto, correoGot, contrasennaGot, this.tipoorganizacionVal, this.razonVal, this.isAdmin
      ).subscribe( success => {

        if (success){

          alert(`Usuario ${nombreCompleto} creado exitosamente`);

        }else{
          alert(`Error al crear usuario: ${correoGot}`);
        }
        this.router.navigateByUrl('home/listaPlantas').then( () => location.reload());

      });
    }else{
      alert('Contraseña y su verificación no coinciden.');
    }
  }

}
