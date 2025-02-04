// import { Component, OnInit, ViewChild} from '@angular/core';
// import { IonSelect } from '@ionic/angular';
// import { ImageUploadComponentComponent } from 'src/app/components/image-upload-component/image-upload-component.component';
// import { ItemStatusService } from 'src/app/services/item-status.service';

// @Component({
//   selector: 'app-add-item',
//   templateUrl: './add-item.page.html',
//   styleUrls: ['./add-item.page.scss'],
// //   standalone: false,
// })
// export class AddItemPage implements OnInit {

//   // reset drop down val to default after click cancel button
//   @ViewChild('selectOpt') selectOpt!: IonSelect;
//   @ViewChild('statusOpt') statusOpt!: IonSelect;
//   // clear img preview 
//   @ViewChild(ImageUploadComponentComponent) itemImg!: ImageUploadComponentComponent;
  
//   // item category, status
//   itemCategoryArray: any[] = [];
//   itemStatusArray: any[] = [];

//   // category name
//   categoryName: any;

//   // item data
//   itemData: any;

//   // store data
//   jsonData: any;

//   constructor(private itemStatusList: ItemStatusService) { }

//   ngOnInit() {

//     // dummy data
//     this.itemCategoryArray = [
//       {
//         cat_id: this.generateId(),
//         cat_name: "Books"
//       },

//       {
//         cat_id: this.generateId(),
//         cat_name: "Magazines"
//       },

//       {
//         cat_id: this.generateId(),
//         cat_name: "Official Character Merchandises"
//       },

//       {
//         cat_id: this.generateId(),
//         cat_name: "Official KPOP Merchandises"
//       },

//       {
//         cat_id: this.generateId(),
//         cat_name: "Fanmade Merchandises"
//       }
//   ];

  // this.itemStatusArray = [

  //   // condition
  //   {
  //     status_id: this.generateId(),
  //     status_name: 'New'
  //   },

  //   {
  //     status_id: this.generateId(),
  //     status_name: 'Damaged'
  //   },

  //   {
  //     status_id: this.generateId(),
  //     status_name: 'Wear'
  //   },

  //   // status
  //   {
  //     status_id: this.generateId(),
  //     status_name: 'Ordered'
  //   },

  //   {
  //     status_id: this.generateId(),
  //     status_name: 'Reserved'
  //   },

  //   {
  //     status_id: this.generateId(),
  //     status_name: 'Shipped'
  //   }
  // ];

//   // todo: get actual data from db

//   // category
  

//   // status 
//   this.itemStatusArray = this.itemStatusList.getItemStatus();
    
//   }

//   // dummy function to generate id
//   generateId() {
//     return Math.floor(Math.random() * 1000);
//   }

//   // clear input val
//   clearItemForm() {
//     const form = document.querySelector('form') as HTMLFormElement;

//     if (form) {
//       // reset form 
//       form.reset();

//       // clear drop down value
//       this.selectOpt.value = null;
//       this.statusOpt.value = [];
//       this.itemImg.resetUpload();

      
//       console.log("clear form");
//     }
//   }

//   // todo: add item details to db 
//   addItemForm() {
//     console.log("invoke add item form");

//     // save to db
    
    
//   }
// }
