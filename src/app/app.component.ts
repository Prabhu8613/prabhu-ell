import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yell-campaign';
  tabClicked: string;
  constructor(private route: ActivatedRoute) {
    console.log(route);
  }
  ngOnInit(): void {
    this.tabClicked = 'Dashboard';
    // this.route.snapshot.url.subscribe(params => console.log(params));
  }
}