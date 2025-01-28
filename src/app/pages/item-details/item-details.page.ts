import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

    // dummy data
    this.itemData = [
      {
        itemId: 1,
        item_name: 'Acer360',
        cat_name: 'Laptop',
        item_status: ['Broken'],
        item_description: "",
        item_origin: "",
        item_value: 100
      }
    ];

    // dummy image
    this.itemImage = "assets/item/army_bomb.jpg";

    // todo: get actual item data from db  


  }



}
