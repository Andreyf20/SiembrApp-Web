import { Injectable } from '@angular/core';
import { AppSettings } from '../../appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  // Ref: Return observables: https://stackoverflow.com/a/39615116
  public login(correo: string, pass: string): Observable<boolean>{

    const url = AppSettings.APIURl + 'login';

    const payload = {correo, contrasenna: pass};

    // Ref: Pipe + Map: https://stackoverflow.com/a/37208814
    return this.http.post(url, payload).pipe( map( res => (Object.values(res)[0] === '1')));
  }

  public getUserInfo(correo: string): Observable<User>{

    const url = AppSettings.APIURl + 'getUserInfo';

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
}
