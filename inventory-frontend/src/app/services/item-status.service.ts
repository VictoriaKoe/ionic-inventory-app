import { Injectable } from '@angular/core';

// use current cls in dependency injection
// other part of app can request instance of this service
@Injectable({
  providedIn: 'root' // can be used throughout the app
  // decorator property tells Angular where this service can be injected in the app
})


export class ItemStatusService {

  constructor() { }

  // constant value
  private readonly itemStatusList: any[] = [
    
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
    }
  ];

  // get item status
  getItemStatus(): string[] {
    return this.itemStatusList;
  }

  // dummy function to generate id
  generateId() {
    return Math.floor(Math.random() * 1000);
  }

}
