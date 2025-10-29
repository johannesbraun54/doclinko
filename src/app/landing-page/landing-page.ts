import { Component, ElementRef, OnInit, signal, ViewChild, viewChild, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { uploadFile } from '../models/interfaces/upload-files.model';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LandingPage implements OnInit {

  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLInputElement>;

  uploadedFiles: uploadFile[] = [];

  mainContentIsLoaded = signal<true | false>(false);
  imageOneIsLoaded = signal<true | false>(false);
  imageTwoIsLoaDded = signal<true | false>(false);
  imageThreeIsLoaded = signal<true | false>(false);

  count: number = 0;

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
    const nativeElement = this.fileUpload?.nativeElement;
    if (!nativeElement?.files) return;

    for (let i = 0; i < nativeElement.files.length; i++) {
      const file = nativeElement.files[i];
      console.log(file);
      
      let src = URL.createObjectURL(file); 
      const uploadFile: uploadFile = { file: file, src: src };
      this.uploadedFiles.push(uploadFile);
    }

  }

  /**
   * Removes a file from the uploadedFiles array.
   * @param i Index of the file to remove from uploadedFiles array.
   */
  removeFileFromUploads(i : number) {
    this.uploadedFiles.splice(i, 1);
  }

}
