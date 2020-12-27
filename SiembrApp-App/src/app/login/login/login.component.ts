import { Observable } from 'rxjs';
import { SessionService } from './../../services/session/session.service';
import { RequestService } from './../../services/request/request.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  correoInput = '';
  loginSubscription: any;
  constructor(
    private titleService: Title,
    private router: Router,
    private snackBar: MatSnackBar,
    private requestService: RequestService,
    ) { }

  ngOnInit(): void {

    this.setTitle('Inicio de sesión');
    SessionService.setLoggedUser(null);

  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  public setTitle( newTitle: string): void {
    this.titleService.setTitle( newTitle );
  }

  loginBtnOnClick(pass: string): void {

    if (this.correoInput.length === 0 || pass.length === 0){

      this.snackBar.open('Hay campos vacíos', 'Entendido', { duration: 2000, });
      return;

    }

    this.loginSubscription = this.requestService.login(this.correoInput, pass).subscribe( success => {

      if (success){

        // Fetch User info

        this.requestService.getUserInfo(this.correoInput).subscribe(user => {

          SessionService.setLoggedUser(user);

          this.router.navigateByUrl('/home');
        });


      }
      else{
        this.snackBar.open('Credenciales incorrectos', 'Entendido', { duration: 2000, });
      }

    });
  }

}
