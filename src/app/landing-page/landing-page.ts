import { Component, OnInit, signal, ViewChild, viewChild, WritableSignal } from '@angular/core';
import { uploadFile } from '../models/interfaces/upload-files.model';


@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})

export class LandingPage implements OnInit {

  @ViewChild('fileUpload') fileUpload: any;
  @ViewChild('uploadedImage') uploadedImage: any;

  uploadedFiles: uploadFile[] = [];

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

  /**
   * Adds src property to uploaded files for previewing and pushs the edit file to uploadedFiles array.
   */
  processUploadedFiles() {

    for (let i = 0; i < this.fileUpload.nativeElement.files.length; i++) {
      const file = this.fileUpload.nativeElement.files[i];
      file['src'] = URL.createObjectURL(file); 
      this.uploadedFiles.push(file);
    }

  }

  removeFileFromUploads(i : number) {
    this.uploadedFiles.splice(i, 1);
  }

}
