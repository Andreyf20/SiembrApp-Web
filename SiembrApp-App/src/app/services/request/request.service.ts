import { Injectable } from '@angular/core';
import { AppSettings } from '../../appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}
