import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsDataService {

  private itemDetails: any[] = [];

  constructor() { }

  // get item details
   getItemDetails() {
    return this.itemDetails;
  }

  // set item details
  setItemDetails(currItemData: any): void {
    this.itemDetails.push(currItemData);
  }

  // clear item details
  clearItemDetails(): void {
    this.itemDetails = [];
  }

}
