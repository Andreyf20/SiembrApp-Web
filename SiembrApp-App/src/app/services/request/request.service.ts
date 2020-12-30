import { Injectable } from '@angular/core';
import { AppSettings } from '../../appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { Vivero } from 'src/app/models/Vivero';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  // Ref: Return observables: https://stackoverflow.com/a/39615116
  public login(correo: string, pass: string): Observable<boolean>{

    const url = AppSettings.APIURL + 'login';

    const payload = {correo, contrasenna: pass};

    // Ref: Pipe + Map: https://stackoverflow.com/a/37208814
    return this.http.post(url, payload).pipe( map( res => (Object.values(res)[0] === '1')));
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
          razon : info.razon

        };

        return loggedUser;
      }));
  }

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

    console.log(payload);

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

    console.log(payload);

    return this.http.post(url, payload).pipe(
       map(
         res => (Object.values(res)[0] === true)
      ));

  }
}
