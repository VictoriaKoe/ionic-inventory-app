import { Component, OnInit } from '@angular/core';
import { ItemDetailsDataService } from 'src/app/services/item-details-data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: false
})
export class ItemDetailsPage implements OnInit {

  // item data
  itemData: any[] = [];

  // item image 
  itemImage: any;

  constructor(
     private itemDetailsService: ItemDetailsDataService
  ) { }

  ngOnInit() {

    // todo: get actual item data from db  
    this.itemData = this.itemDetailsService.getItemDetails();
    console.log(this.itemData);

  }
  
}
