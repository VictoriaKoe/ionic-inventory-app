import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'image-upload-component',
  templateUrl: './image-upload-component.component.html',
  styleUrls: ['./image-upload-component.component.scss'],
  imports: [
    IonItem,
    IonLabel,
    IonInput,
    CommonModule,
    IonImg
  ]
})

export class ImageUploadComponentComponent implements OnInit {

  // upload photo
  barStatus: boolean = false;
  selectedImageUrl: any;
  selectedFile: any;

  constructor() { }

  ngOnInit() {}

  // upload image
  uploadPhoto(event: any) {
    this.barStatus = true;

    // get files from listen event, ret files list
    const files = event.target.files;
    console.log(files);
  
    // check file exist 
    if (files) {

      // extract files from files list 
      const selectedFile = files[0];
      console.log(selectedFile);
      
      // Validate file type and size
      if (!this.validateFile(selectedFile)) {
        return;
      }

      // Read file and create preview
      const reader = new FileReader();
      
      // load file has been read successfully
      reader.onload = (e: any) => {
        // decode img file to base64 str
        this.selectedFile = e.target.result;
        this.selectedImageUrl = e.target.result;
        console.log(this.selectedImageUrl);
      };

      // handle file reading failures
      reader.onerror = (error) => {
        console.error('File reading error', error);
        window.alert('Error reading file');
      };

      // read the contents of the specified Blob or File, ret undefined
      reader.readAsDataURL(selectedFile);
      console.log("sucessfully upload");

      // todo: save to db

      this.barStatus = false;

    }
    else {
      window.alert('no files upload');
      return;
    }
  }

  // validate file 
  validateFile(file: File): boolean {
    // img file size
    const maxSize = 5 * 1024 * 1024; // 5MB 
    // img file type, MIME types
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    // check upload img exist in the allowedTypes array
    if (!allowedTypes.includes(file.type)) {
      // show error
      window.alert('Invalid file type');
      return false;
    }

    // check img file size, in bytes of data 
    if (file.size > maxSize) {
      // Show error toast
      window.alert('File is too large');
      return false;
    }

    return true;
  }

  // reset to default val
  resetUpload() {
    this.barStatus = false;
    this.selectedFile = '';
    this.selectedImageUrl = null;
  }

  getImageURL() {
    return this.selectedImageUrl;
  }
}
