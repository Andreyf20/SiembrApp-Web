import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
  ) {

    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg'));

  }

  ngOnInit(): void {
  }

  logout(){
    
  }

}
