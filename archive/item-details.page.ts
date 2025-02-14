// import { Component, OnInit } from '@angular/core';
// import { ItemDetailsDataService } from 'src/app/services/item-details-data.service';

// @Component({
//   selector: 'app-item-details',
//   templateUrl: './item-details.page.html',
//   styleUrls: ['./item-details.page.scss'],
//   standalone: false
// })
// export class ItemDetailsPage implements OnInit {

//   // item data
//   itemData: any[] = [];

//   // item image 
//   itemImage: any;

//   constructor(
//      private itemDetailsService: ItemDetailsDataService
//   ) { }

//   ngOnInit() {

//     // // dummy data
//     // this.itemData = [
//     //   {
//     //     itemId: 1,
//     //     item_name: 'Official Light Stick Ver 3',
//     //     cat_name: 'Official KPOP Merchandise',
//     //     item_status: ['Used, Good condition'],
//     //     item_description: "specially designed for A.R.M.Y",
//     //     item_origin: "Korea",
//     //     item_value: 200
//     //   }
//     // ];

//     // // dummy image
//     // this.itemImage = "assets/item/army_bomb.jpg";

//     // todo: get actual item data from db  
//     this.itemData = this.itemDetailsService.getItemDetails();
//     console.log(this.itemData);

//   }
  
// }
