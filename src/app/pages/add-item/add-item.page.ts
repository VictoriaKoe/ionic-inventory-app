import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
  standalone: false,
})
export class AddItemPage implements OnInit {

  @ViewChild('selectOpt') selectOpt!: IonSelect;
  @ViewChild('statusOpt') statusOpt!: IonSelect;
  
  // item category, status
  itemCategoryArray: any[] = [];
  itemStatusArray: any[] = [];

  // category name
  categoryName: any;

  // item data
  itemData: any;

  // store data
  jsonData: any;

  constructor() { }

  ngOnInit() {

    // dummy data
    this.itemCategoryArray = [
      {
        cat_id: this.generateId(),
        cat_name: "Books"
      },

      {
        cat_id: this.generateId(),
        cat_name: "Magazines"
      },

      {
        cat_id: this.generateId(),
        cat_name: "Official Character Merchandises"
      },

      {
        cat_id: this.generateId(),
        cat_name: "Official KPOP Merchandises"
      },

      {
        cat_id: this.generateId(),
        cat_name: "Fanmade Merchandises"
      }
  ];

  this.itemStatusArray = [

    // condition
    {
      status_id: this.generateId(),
      status_name: 'New'
    },

    {
      status_id: this.generateId(),
      status_name: 'Damaged'
    },

    {
      status_id: this.generateId(),
      status_name: 'Wear'
    },

    // status
    {
      status_id: this.generateId(),
      status_name: 'Ordered'
    },

    {
      status_id: this.generateId(),
      status_name: 'Reserved'
    },

    {
      status_id: this.generateId(),
      status_name: 'Shipped'
    },

  ];

    // todo: get actual data from db
    
    
  }

  // dummy function to generate id
  generateId() {
    return Math.floor(Math.random() * 1000);
  }

  // todo: add item details to db 
  addItemForm() {
    console.log("invoke add item form");

    
  }

  // clear input val
  clearItemForm() {
    const form = document.querySelector('form') as HTMLFormElement;

    if (form) {
      // reset form 
      form.reset();

      // clear drop down value
      this.selectOpt.value = null;
      this.statusOpt.value = [];
      
      console.log("clear form");
    }
  }

}
