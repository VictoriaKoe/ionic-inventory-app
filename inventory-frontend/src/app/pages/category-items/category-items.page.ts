import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemCategoriesService } from 'src/app/services/item-categories.service';
import { ItemDetailsDataService } from 'src/app/services/item-details-data.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';

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
    private categoryData: ItemCategoriesService,
    private itemDetailsService: ItemDetailsDataService,
    private loginAuthService: LoginAuthService,
    private itemCategoryService: ItemCategoriesService

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

    // check current user
    this.loginAuthService.getCurrentUser().then((user: { uid: any; }) => {
      const userID = user?.uid;
      console.log(userID);

      // category item data 
      this.itemCategoryService.getItemByCategory(userID, this.categoryName).subscribe(
        res => {
          this.itemData = res;
          console.log(this.itemData);
        }
      )}
    )
  }

  // view item details
  viewItemDetails(item: any){
    // todo: save specific item details to db to render on item details page
    this.itemDetailsService.clearItemDetails();
    this.itemDetailsService.setItemDetails(item);
    this.navCtrl.navigateForward('item-details');
  }

}
