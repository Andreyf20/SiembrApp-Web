import { AppSettings } from '../../AppSettings';
import { Fenologia, MetodoDispersion, AgentePolinizador, Familia } from './../../models/Planta';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from '../../services/request/request.service';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrls: ['./crear-planta.component.scss']
})
export class CrearPlantaComponent implements OnInit, OnDestroy {

  // nextButton
  nextDisabled = false;

  // Form groups
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

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
  base64Image: string = null;


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

      this.fifthFormGroup = this.formBuilder.group({
        // Imagen
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

  // Forms

  missingInfoStep2(): boolean{

    return !(this.selectedFamilia.length !== 0 &&
      this.selectedFenologia.length !== 0 &&
      this.selectedMetodo.length !== 0 &&
      this.selectedAgente.length !== 0 &&
      this.selectedReqLuz.length !== 0);

  }
  // Filter by extension: https://stackoverflow.com/a/54232158

  onFileSelected(event): void{

    const file = event.target.files[0];

    // Get extension
    // Ref: https://stackoverflow.com/a/680982

    if (!file){
      return;
    }

    const acceptedExtensions = ['.png', '.jpeg', '.jpg'];
    const re = /(?:\.([^.]+))?$/;

    const extension = re.exec(file.name)[0];

    if ( (acceptedExtensions.includes(extension)) === false){
      this.nextDisabled = true;
      alert('Tipo de archivo no compatible.');
      return;
    }

    // Revisar tamaño, máximo de 500 x 500
    const fileSizeLimit  = 500 * 500;
    if (file.size > fileSizeLimit){
      this.nextDisabled = true;
      alert('Archivo es muy grande. (Máximo imágenes de 256x256)');
      return;
    }

    this.nextDisabled = false;
    if (file !== null){

      // Transformar imagen a base64string
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        // Convertir imagen a base 64

        // Ref: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        // Cast to string Ref: https://stackoverflow.com/a/55955490

        this.base64Image = (reader.result as string).split(';base64,')[1];

        // Programatically set attribute to tag >> Ref: https://stackoverflow.com/a/43423559
        const previewTag = document.getElementById('previewTag');

        previewTag.setAttribute('src', (reader.result as string));
        console.log(this.base64Image);

      }, false);

      reader.readAsDataURL(file);

    }
  }

  submit(): void{

    const nombreCientifico = this.firstFormGroup.get('nombreCientifico').value;

    // Imagen
    if (this.base64Image === null || this.base64Image.length === 0){
      this.base64Image = AppSettings.FALLBACKPLANTAIMG;
    }
    console.log(this.base64Image);
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
      this.base64Image

    ).subscribe( success => {

        if (success){

          alert(`Planta ${nombreCientifico} creado exitosamente`);

        }else{
          alert(`Error al crear planta: ${nombreCientifico}`);
        }
        this.router.navigateByUrl('home/listaPlantas').then( () => location.reload());

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
