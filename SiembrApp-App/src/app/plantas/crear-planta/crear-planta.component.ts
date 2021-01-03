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
export class CrearPlantaComponent implements OnInit, OnDestroy {

  // Form groups
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  // Familias
  familias: Familia[] = [];

  // Fenologias
  fenologias: Fenologia[] = [];

  // Metodos de dispersion
  metodos: MetodoDispersion[] = [];

  // Agentes polinizadores
  agentes: AgentePolinizador[] = [];

  // Requerimientos de luz
  requerimientosLuz: string[] = [];

  // Atributos de planta
  selectedFamilia = '';
  selectedFenologia = '';
  selectedMetodo = '';
  selectedAgente = '';
  selectedReqLuz = '';

  // Subscriptions
  familiaSub: Subscription;
  fenologiaSub: Subscription;
  agentesSub: Subscription;
  metodosSub: Subscription;
  opSub: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Query de los datos catalogo
    if (this.loadCatalogueData()){

      // Inicializar form groups
      this.firstFormGroup = this.formBuilder.group({
        nombreComun: ['', Validators.required],
        nombreCientifico: ['', Validators.required],
        origen: ['', Validators.required],
      });

      this.secondFormGroup = this.formBuilder.group({
        // Dropdown
      });

      this.thirdFormGroup = this.formBuilder.group({
        minRangoAltitudinal: ['', Validators.required],
        maxRangoAltitudinal: ['', Validators.required],
        metros: ['', Validators.required],
        habito: ['', Validators.required]
      });

      this.fourthFormGroup = this.formBuilder.group({
        frutos: ['', Validators.required],
        texturaFruto: ['', Validators.required],
        flor: ['', Validators.required],
        usosConocidos: ['', Validators.required],
        paisajeRecomendado: ['', Validators.required]
      });
    }
  }

  ngOnDestroy(): void{
    this.familiaSub.unsubscribe();
    this.fenologiaSub.unsubscribe();
    this.agentesSub.unsubscribe();
    this.metodosSub.unsubscribe();

    if (this.opSub){
      this.opSub.unsubscribe();
    }

  }

  missingInfoStep2(): boolean{

    return !(this.selectedFamilia.length !== 0 &&
      this.selectedFenologia.length !== 0 &&
      this.selectedMetodo.length !== 0 &&
      this.selectedAgente.length !== 0 &&
      this.selectedReqLuz.length !== 0);

  }

  submit(): void{

    const nombreCientifico = this.firstFormGroup.get('nombreCientifico').value;

    this.opSub = this.requestService.crearPlanta(

      // Parametros para el request
      this.firstFormGroup.get('nombreComun').value,
      nombreCientifico,
      this.firstFormGroup.get('origen').value,

      this.thirdFormGroup.get('minRangoAltitudinal').value,
      this.thirdFormGroup.get('maxRangoAltitudinal').value,
      this.thirdFormGroup.get('metros').value,
      this.selectedReqLuz,
      this.thirdFormGroup.get('habito').value,

      this.selectedFamilia,
      this.selectedFenologia,
      this.selectedAgente,
      this.selectedMetodo,

      this.fourthFormGroup.get('frutos').value,
      this.fourthFormGroup.get('texturaFruto').value,
      this.fourthFormGroup.get('flor').value,
      this.fourthFormGroup.get('usosConocidos').value,
      this.fourthFormGroup.get('paisajeRecomendado').value,

    ).subscribe( success => {

        if (success){

          alert(`Planta ${nombreCientifico} creado exitosamente`);

        }else{
          alert(`Error al crear planta: ${nombreCientifico}`);
        }
        this.router.navigateByUrl('home/listaViveros').then( () => location.reload());

      });
  }

  // Carga de datos
  loadCatalogueData(): boolean{

    this.loadFamilias();
    this.loadFenologias();
    this.loadMetodosDispersion();
    this.loadAgentesPolinizadores();
    this.loadRequerimientosDeLuz();
    return true;
  }

  loadFamilias(): void{
    this.familiaSub = this.requestService.getFamilias().subscribe( familias => {

      familias.forEach(element => {

        this.familias.push(element as Familia);

      });
    });
  }

  loadFenologias(): void{

    this.fenologiaSub = this.requestService.getFenologias().subscribe( fenologias => {

      fenologias.forEach(element => {

        this.fenologias.push(element as Fenologia);

      });
    });

  }

  loadMetodosDispersion(): void{

    this.metodosSub = this.requestService.getMetodosDispersion().subscribe( metodosDispersion => {

      metodosDispersion.forEach(element => {

        this.metodos.push(element as MetodoDispersion);

      });
    });
  }

  loadAgentesPolinizadores(): void{

    this.agentesSub = this.requestService.getAgentesPolinizadores().subscribe( agentesPolinizadores => {

      agentesPolinizadores.forEach(element => {

        this.agentes.push(element as AgentePolinizador);

      });
    });
  }

  loadRequerimientosDeLuz(): string[] {
    if (this.requerimientosLuz.length === 0){

      this.requerimientosLuz.push('Mucha luz constantemente');
      this.requerimientosLuz.push('Mucha luz en ocasiones');
      this.requerimientosLuz.push('Luz regular en ocasiones');
      this.requerimientosLuz.push('Poca luz');
    }
    return this.requerimientosLuz;
  }

}
