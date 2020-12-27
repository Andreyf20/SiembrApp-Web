import { RequestService } from './../../services/request/request.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

      if(success){

        this.router.navigateByUrl('/home');

      }
      else{
        this.snackBar.open('Credenciales incorrectos', 'Entendido', { duration: 2000, });
      }

    });
  }

  ngOnDestroy(): void {

    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

    this.loginSubscription.unsubscribe();
  }

}
