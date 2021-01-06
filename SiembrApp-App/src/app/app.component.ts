import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SiembrApp-App';

  ngOnInit(): void{
    // Environment variables: https://dev.to/rafaelbernard/environment-variables-in-angular-1f1i
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Cool. Production!');
    }
  }
}
