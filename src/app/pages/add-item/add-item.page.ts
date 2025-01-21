import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
  standalone: false,
})
export class AddItemPage implements OnInit {

  // var to stored val
  itemCategoryArray: any[] = [];
  itemStatusArray: any[] = [];
  categoryName: any;
  itemData: any;

  // store data
  jsonData: any;

  constructor() { }

  ngOnInit() {

    // dummy data
    this.itemCategoryArray = [
      {
        cat_id: this.generateId(),
        cat_name: "Acrylic Stands"
      },

      {
        cat_id: this.generateId(),
        cat_name: "Badges"
      },

      {
        cat_id: this.generateId(),
        cat_name: "Merchandise"
      }

  ];

  this.itemStatusArray = [
    {
      status_id: this.generateId(),
      status_name: 'Good condition'
    },

    {
      status_id: this.generateId(),
      status_name: 'Broken'
    },

    {
      status_id: this.generateId(),
      status_name: 'Rusting'
    },

    {
      status_id: this.generateId(),
      status_name: 'Under Repair'
    },

  ];

    // todo: get actual data from db
    
    
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }

}
