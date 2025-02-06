import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemCategoriesService } from 'src/app/services/item-categories.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.page.html',
  styleUrls: ['./category-items.page.scss'],
  standalone: false
})
export class CategoryItemsPage implements OnInit {

  itemData: any[] = [];
  categoryName!:string;
  // default val
  item_image: any = "https://ionicframework.com/docs/img/demos/card-media.png"

  constructor(
    private navCtrl: NavController,
    private categoryData: ItemCategoriesService 
  ) {}

  ngOnInit() {

    // dummy data
    this.itemData = [
      {
        itemId: 1,
        item_name: 'Lightstick',
        cat_name: 'Official KPOP Merchandise',
        item_status: ['Wear'],
        item_image: "assets/item/army_bomb.jpg"
      },

      {
        itemId: 2,
        item_name: 'Photocard',
        cat_name: 'Official KPOP Merchandise',
        item_status: ['New', 'Ordered'],
        item_image: "assets/item/photocard1.jpg"
      }

    ];

    // todo: retrive item data of specfic category from db / other services

    // category name
    this.categoryName = this.categoryData.getCategoryName();

    // category item data 

  }

  // view item details
  viewItemDetails(item: any){
    // todo: save specific item details to db to render on item details page
    
    this.navCtrl.navigateForward('item-details');
  }

}
