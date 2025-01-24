import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

    // dummy data
    this.itemData = [
      {
        itemId: 1,
        item_name: 'Acer360',
        cat_name: 'Laptop',
        item_status: ['Broken']
      },

      {
        itemId: 2,
        item_name: 'Lightstick',
        cat_name: 'Official KPOP Merchandise',
        item_status: ['Wear']
      },

      {
        itemId: 3,
        item_name: 'photocard',
        cat_name: 'Official KPOP Merchandise',
        item_status: ['New', 'Ordered']
      }
    ];

    // get item data from db  
    
    this.queryItemResult = this.itemData;
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
    // target input
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    // filter item from item json data, ret arr
    this.queryItemResult = this.itemData.filter(
      (item) => {
        // some - check any arr elem pass test, ret true/false
        // check searched item exist in item data
        return Object.values(item).some(value =>
          value && value.toString().toLowerCase().includes(query) // search condi
        );
      }
    );

    console.log(this.queryItemResult);
  }

  // add new item 
  addItem() {
    this.navCtrl.navigateRoot('main/add-item');
  }

  // view item details


}
