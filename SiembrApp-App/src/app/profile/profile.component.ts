import { SessionService } from './../services/session/session.service';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User = SessionService.getLoggedUser();

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {

    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg')
    );

    this.iconRegistry.addSvgIcon(
      'profile',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/profile.svg')
    );

    this.iconRegistry.addSvgIcon(
      'back',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/left-arrow.svg')
    );

  }

  ngOnInit(): void {
  }

}
