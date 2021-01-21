import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {

    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg')
    );

    this.iconRegistry.addSvgIcon(
      'profile',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/profile.svg')
    );

  }

  ngOnInit(): void {

  }

  onTabChanged(): void{
    console.log('Tab changed');
    this.router.navigateByUrl('home');
  }

  logout(): void{
    sessionStorage.removeItem('userInfo');
    console.log('Adiós!');
    this.router.navigateByUrl('/login');
  }

}
