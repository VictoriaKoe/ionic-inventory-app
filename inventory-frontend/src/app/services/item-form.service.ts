import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemFormService {

  private itemFormDetails: any[] = [];

  constructor() {}

  // get item form data
  getitemFormDetails(): any[] {
    return this.itemFormDetails;
  }

  // set add item form data 
  setitemFormDetails(itemFormData: any): void {
    this.itemFormDetails.push(itemFormData);
  }

  // clear add item form data 
  clearitemFormDetails(): void {
    this.itemFormDetails = [];
  }

}
