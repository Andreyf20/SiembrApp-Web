import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-crear-fenologia',
  templateUrl: './crear-fenologia.component.html',
  styleUrls: ['./crear-fenologia.component.scss']
})
export class CrearFenologiaComponent implements OnInit, OnDestroy {

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
    this.subscription = this.requestService.crearFenologia(
      nombre
    ).subscribe( res => {
      if (res){
        alert('Se ha creado el agente polinizador con éxito');
      }else{
        alert('Ocurrió un error o el agente ya existe');
      }
      return this.router.navigateByUrl('home/listaAgentesPolinizadores').then(() => { location.reload(); });

    });
  }

}
