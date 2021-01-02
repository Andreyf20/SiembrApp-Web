import { Fenologia, MetodoDispersion, AgentePolinizador, Familia } from './../../models/Planta';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrls: ['./crear-planta.component.scss']
})
export class CrearPlantaComponent implements OnInit {

  // Form groups
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // Familias
  familias: Familia[];

  // Fenologias
  fenologias: Fenologia[];

  // Metodos de dispersion
  metodos: MetodoDispersion[];

  // Agentes polinizadores
  agentes: AgentePolinizador[];

  // TODO: Niveles de luz (?)

  // Atributos de planta
  selectedFamilia: string;
  selectedFenologia: string;
  selectedMetodo: string;
  selectedAgente: string;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    // Query de los datos catalogo

    

    // Inicializar form groups
    this.firstFormGroup = this.formBuilder.group({
      nombreComun: ['', Validators.required],
      nombreCientifico: ['', Validators.required],
      origen: ['', Validators.required],
      fenologia: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      nombreComun: ['', Validators.required],
      nombreCientifico: ['', Validators.required],
      origen: ['', Validators.required],
      fenologia: ['', Validators.required],
    });



  }

  submit(): void{

  }
}
