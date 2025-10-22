import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage implements OnInit {

  pageLoaded: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 500)
  }

}
