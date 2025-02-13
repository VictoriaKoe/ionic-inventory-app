import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsDataService {

  private itemDetails: any[] = [];

  constructor(
    private firestore: Firestore,
    
  ) { }

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
