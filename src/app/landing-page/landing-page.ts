import { Component, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage implements OnInit {

  mainContentIsLoaded = signal<true | false>(false);
  imageOneIsLoaded = signal<true | false>(false);
  imageTwoIsLoaDded = signal<true | false>(false);
  imageThreeIsLoaded = signal<true | false>(false);
  
  constructor() {}

  ngOnInit(): void {
    this.loadPageAnimations();
  }


  /**
   * Loads the page animations with diffrent delays.
   */
  loadPageAnimations() {
    this.triggerPageLoadAnimations(this.mainContentIsLoaded, 100);
    this.triggerPageLoadAnimations(this.imageOneIsLoaded, 700);
    this.triggerPageLoadAnimations(this.imageTwoIsLoaDded, 1000);
    this.triggerPageLoadAnimations(this.imageThreeIsLoaded, 1200);
  }

  /**
   * 
   * @param signal The signal to set to true after the delay. 
   * @param delay The delay for triggering in milliseconds.
   */
  triggerPageLoadAnimations(signal: WritableSignal<boolean>, delay: number) {
    setTimeout(() => {
      signal.set(true);
    }, delay)
  }

}
