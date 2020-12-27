import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {

    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg'));

  }

  ngOnInit(): void {

    this.snackBar.open('Bienvenido ' + SessionService.getLoggedUser().nombre, 'OK', { duration: 1000, });

  }
}
