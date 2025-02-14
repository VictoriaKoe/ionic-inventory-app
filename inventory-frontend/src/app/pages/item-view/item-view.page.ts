import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemDetailsDataService } from 'src/app/services/item-details-data.service';
import { ItemFormService } from 'src/app/services/item-form.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.page.html',
  styleUrls: ['./item-view.page.scss'],
  standalone: false
})
export class ItemViewPage implements OnInit {

  // toogle search 
  isSearchOpen: boolean = false;
  // ori item data fetch from db
  itemData: any[] = [];
  // search/filter item after enter search term 
  queryItemResult: any[] = [];

  userID: any;

  constructor(
    private navCtrl: NavController,
    private itemFormService: ItemFormService,
    private loginAuth: LoginAuthService,
    private itemDetailsService: ItemDetailsDataService
  ) { }

  ngOnInit() {

    // get current user id from firestore
    this.loginAuth.getCurrentUser().then((user: { uid: any; }) => {
      this.userID = user?.uid;
      console.log(this.userID);

      // get all saved items from db for the current user
      this.itemFormService.getItemList(this.userID).subscribe(res =>
        {
          this.itemData = res;
          console.log(this.itemData);

          // search bar query item to filter
          this.queryItemResult = this.itemData;
        })
    })

  }

  // toogle the search
  toogleSearchOpen(isOpen: boolean){
    switch (isOpen){
      case true: 
        this.isSearchOpen = !isOpen;
        break;
      case false:
        this.isSearchOpen = !isOpen;
        break;
      default:
        this.isSearchOpen = isOpen;
    }
  }

  // handle search input
  searchInput(event: Event) {
    this.queryItemResult = [];
    // target input
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    // filter item from item json data, ret arr
    this.queryItemResult = this.itemData.filter(
      (item) => {
        // some - check any arr elem pass test, ret true/false
        // check searched item exist in item data
        return Object.values(item).some((value) => 
          value && value.toString().toLowerCase().includes(query) // search condi
        );
      }
    )

    console.log(this.queryItemResult);
  }

  // add new item 
  addItem() {
    this.navCtrl.navigateRoot('main/add-item');
  }

  // view item details
  viewItemDetails(item: any){
    // todo: save specific item details to db to render on item details page
    this.itemDetailsService.clearItemDetails();
    this.itemDetailsService.setItemDetails(item);
    this.navCtrl.navigateForward('item-details');
  }
  
}
