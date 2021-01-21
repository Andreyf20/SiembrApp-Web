import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-crear-familia',
  templateUrl: './crear-familia.component.html',
  styleUrls: ['./crear-familia.component.scss']
})
export class CrearFamiliaComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
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
    this.subscription = this.requestService.crearFamilia(
      nombre
    ).subscribe( res => {
      if (res){
        alert('Se ha creado la familia con éxito');
      }else{
        alert('Ocurrió un error o la familia ya existe');
      }
      return this.router.navigateByUrl('home/listaFamilias').then(() => { location.reload(); });

    });
  }

}
