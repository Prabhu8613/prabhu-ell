import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yell-campaign';
  tabClicked: string = 'dashboard';

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.tabClicked = 'Dashboard';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && typeof event.url !== "undefined") {
        console.log(event.url.substring(1));
        let tabClicked1 = event.url.substring(1);
        this.tabClicked = tabClicked1;
      }
    });
  }

}