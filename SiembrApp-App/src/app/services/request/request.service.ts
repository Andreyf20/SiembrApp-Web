import { Fenologia, MetodoDispersion, AgentePolinizador, Familia } from 'src/app/models/Planta';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/AppSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { Vivero } from 'src/app/models/Vivero';
import { Planta } from 'src/app/models/Planta';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  // Usuario

  // Ref: Return observables: https://stackoverflow.com/a/39615116
  public login(correo: string, pass: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'login';

    const payload = {correo, contrasenna: pass};

    // Ref: Pipe + Map: https://stackoverflow.com/a/37208814
    return this.http.post(url, payload).pipe( map( res => (Object.values(res)[0] === '1')));
  }

  /**
   * Request para crear usuario nuevo
   * @param nombre
   * @param correo
   * @param contrasenna
   * @param tipoOrganizacion
   * @param razon
   * @param admin
   */
  public registrarUsuario(
    nombre: string,
    correo: string,
    contrasenna: string,
    tipoOrganizacion: string,
    razon: string,
    admin: boolean
  ): Observable<boolean>{

      const url = AppSettings.APIURL + 'register_user';

      const payload = {
        nombre,
        correo,
        contrasenna,
        tipoOrganizacion,
        razon,
        admin
      };

      console.log(payload);

      const observable: Observable<any> = this.http.post(url, payload);

      return observable.pipe(
      map(
        res => (Object.values(res)[0] === '1')
     ));
  }

  public getUserInfo(correo: string): Observable<User>{

    const url = AppSettings.APIURL + 'getUserInfo';

    const payload = {correo};

    // Formato en el cual responde el API a este request

    const observable: Observable<any> = this.http.post<any>(url, payload);

    return observable.pipe(

      map( res => {

        const info: any = res.info;

        // Ref build an instance of an interface:
        // https://stackoverflow.com/a/36749812

        const loggedUser: User = {

          uid : info.uid,
          nombre: info.nombre,
          correo: info.correo,
          nombretipoorganizacion : info.nombretipoorganizacion,
          razon : info.razon,
          admin: info.admin

        };

        return loggedUser;
      }));
  }

  // Viveros

  public getViveros(): Observable<Vivero[]> {

    const url = AppSettings.APIURL + 'listViveros';

    const observable: Observable<any> = this.http.get(url);

    return observable.pipe(

      map( res => {

        const viverosList = res.viveros;
        return viverosList;

      })
    );
  }

  /**
   * Request para agregar un vivero
   * @param nombre
   * @param direccion 
   * @param telefonos 
   * @param horarios 
   */
  public addVivero(nombre: string, direccion: string, telefonos: string, horarios: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'agregarVivero';

    const payload = {
      nombreVivero: nombre,
      direccion,
      telefonos: (telefonos.length !== 0 ? telefonos : 'NO INDICA'),
      horarios: (horarios.length !== 0 ? horarios : 'NO INDICA')
    };

    return this.http.post(url, payload).pipe(
       map(
         res => (Object.values(res)[0] === true)
      ));
  }

  public modificarDatosVivero(nombre: string, direccion: string, telefonos: string, horarios: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'actualizarInfoVivero';

    const payload = {
      nombre,
      direccion: (direccion.length !== 0 ? direccion : 'NO INDICA'),
      telefonos: (telefonos.length !== 0 ? telefonos : 'NO INDICA'),
      horarios: (horarios.length !== 0 ? horarios : 'NO INDICA')
    };

    return this.http.post(url, payload).pipe(
       map(
         res => (Object.values(res)[0] === true)
      )
    );
  }

  public eliminarVivero(nombre: string): Observable<boolean>{
    const url = AppSettings.APIURL + 'eliminarVivero';

    const payload = { nombre };

    return this.http.post(url, payload).pipe(
      map(
        res => (Object.values(res)[0] === true)
     )
   );

  }

  // Familias

  public getFamilias(): Observable<Familia[]> {

    const url = AppSettings.APIURL + 'listFamilias';

    const observable: Observable<any> = this.http.get(url);

    return observable.pipe(

      map( res => {

        const familiasList = res.familias;
        return familiasList;

      })
    );
  }


  public crearFamilia(nombre: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'agregar_familia';

    const observable: Observable<any> = this.http.get(url);

    const payload = {
      familia: nombre
    };

    return this.http.post(url, payload).pipe(
      map(
        res => (Object.values(res)[0] === '1')
     ));
  }

  // Fenologias
  public getFenologias(): Observable<Fenologia[]> {

    const url = AppSettings.APIURL + 'listFenologias';

    const observable: Observable<any> = this.http.get(url);

    return observable.pipe(

      map( res => {

        const viverosList = res.fenologias;
        return viverosList;

      })
    );
  }

  public crearFenologia(nombre: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'agregar_fenologia';

    const observable: Observable<any> = this.http.get(url);

    const payload = {
      fenologia: nombre
    };

    return this.http.post(url, payload).pipe(
      map(
        res => (Object.values(res)[0] === '1')
     ));
  }

  // Metodos de dispersion
  public getMetodosDispersion(): Observable<MetodoDispersion[]> {

    const url = AppSettings.APIURL + 'listMetodosDispersion';

    const observable: Observable<any> = this.http.get(url);

    return observable.pipe(

      map( res => {

        const metodosList = res.metodosdispersion;
        return metodosList;

      })
    );
  }

  public crearMetodoDispersion(nombre: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'agregar_metododispersion';

    const observable: Observable<any> = this.http.get(url);

    const payload = {
      metododispersion: nombre
    };

    return this.http.post(url, payload).pipe(
      map(
        res => (Object.values(res)[0] === '1')
     ));
  }


  // Agente polinizador
  public getAgentesPolinizadores(): Observable<AgentePolinizador[]> {

    const url = AppSettings.APIURL + 'listAgentePolinizador';

    const observable: Observable<any> = this.http.get(url);

    return observable.pipe(

      map( res => {

        const agentesList = res.agentes;
        return agentesList;

      })
    );
  }

  public crearAgentePolinizador(nombre: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'agregar_agentepolinizador';

    const observable: Observable<any> = this.http.get(url);

    const payload = {
      agentepolinizador: nombre
    };

    return this.http.post(url, payload).pipe(
      map(
        res => (Object.values(res)[0] === '1')
     ));
  }

    // Plantas

  public getPlantas(): Observable<Planta[]>{

    const url = AppSettings.APIURL + 'ver_plantas/*';

    const observable: Observable<any> = this.http.get(url);

    return observable.pipe(

      map( res => {

        const plantasList = res;
        return plantasList;

      })
    );
  }

  public crearPlanta(

    // Parametros
    nombreComun: string,
    nombreCientifico: string,
    origen: string,
    minRangoAltitudinal: string,
    maxRangoAltitudinal: string,
    metros: string,
    requerimientosDeLuz: string,
    habito: string,
    familia: string,
    fenologia: string,
    agentePolinizador: string,
    metodoDispersion: string,
    frutos: string,
    texturaFruto: string,
    flor: string,
    usosConocidos: string,
    paisajeRecomendado: string,
    imagen: string

  ): Observable<boolean>{

      // Codigo
      const url = AppSettings.APIURL + 'agregar_planta';

      const payload = {
        nombreComun,
        nombreCientifico,
        origen,
        minRangoAltitudinal,
        maxRangoAltitudinal,
        metros,
        requerimientosDeLuz,
        habito,
        familia,
        fenologia,
        agentePolinizador,
        metodoDispersion,
        frutos,
        texturaFruto,
        flor,
        usosConocidos,
        paisajeRecomendado,
        imagen
      };

      console.log(payload);

      const observable: Observable<any> = this.http.post(url, payload);
      return observable.pipe(

        map( res => (Object.values(res)[0] === true))
      );
  }

  // TODO
  public modificarPlanta(

    // Parametros
    nombreComun: string,
    nombreCientifico: string,
    origen: string,
    minRangoAltitudinal: string,
    maxRangoAltitudinal: string,
    metros: string,
    requerimientosDeLuz: string,
    habito: string,
    familia: string,
    fenologia: string,
    agentePolinizador: string,
    metodoDispersion: string,
    frutos: string,
    texturaFruto: string,
    flor: string,
    usosConocidos: string,
    paisajeRecomendado: string,
    //imagen: string

  ): Observable<boolean>{

      // Codigo
      const url = AppSettings.APIURL + 'modificar_planta';

      const payload = {
        nombreComun,
        nombreCientifico,
        origen,
        minRangoAltitudinal,
        maxRangoAltitudinal,
        metros,
        requerimientosDeLuz,
        habito,
        familia,
        fenologia,
        agentePolinizador,
        metodoDispersion,
        frutos,
        texturaFruto,
        flor,
        usosConocidos,
        paisajeRecomendado,
        //imagen
      };
      console.log(payload);
      const observable: Observable<any> = this.http.post(url, payload);
      return observable.pipe(

        map( res => (Object.values(res)[0] === '1'))
      );
  }

  public eliminarPlanta(nombreComun: string): Observable<boolean>{
    const url = AppSettings.APIURL + 'eliminar_planta';

    const payload = { nombreComun };

    return this.http.post(url, payload).pipe(
      map( res => (Object.values(res)[0] === true) )
    );
  }

}
