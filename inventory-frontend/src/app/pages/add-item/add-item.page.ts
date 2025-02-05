import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { ImageUploadComponentComponent } from 'src/app/components/image-upload-component/image-upload-component.component';
import { ItemCategoriesService } from 'src/app/services/item-categories.service';
import { ItemStatusService } from 'src/app/services/item-status.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
  standalone: false,
})

// src: https://developer.mozilla.org/en-US/docs/Web/API/FormData

export class AddItemPage implements OnInit {

  // reset drop down val to default after click cancel button
  @ViewChild('selectOpt') selectOpt!: IonSelect;
  @ViewChild('statusOpt') statusOpt!: IonSelect;
  // clear img preview 
  @ViewChild(ImageUploadComponentComponent) itemImg!: ImageUploadComponentComponent;

  // item category, status
  itemCategoryArray: any[] = [];
  itemStatusArray: any[] = [];

  // category name
  categoryName: any;

  // item data
  itemData: any;

  // store data
  jsonData: any;

  constructor(
    private itemStatus: ItemStatusService, 
    private categoryData: ItemCategoriesService
  ) { }

  ngOnInit() {

  // todo: get actual data from db service
  // category
  this.itemCategoryArray = this.categoryData.getCategoryList();

  // status 
  this.itemStatusArray = this.itemStatus.getItemStatus();

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
      this.itemImg.resetUpload();

      console.log("clear form");
    }
  }

  // todo: add item details to db 
  addItemForm() {
    console.log("invoke add item form");
    console.log("category: " + this.selectOpt.value, "status: " + this.statusOpt.value);

    // get add item form html page
    const form = document.querySelector('form') as HTMLFormElement;
    console.log(form);

    // if form exist, get all input vals from form 
    if (form) {

      const formData = new FormData(form);
      const formDataObject = {};

      // formData.forEach((key, value)) => {};


      // save to db
      
    }

    else {
      console.error("form not exists.")
    }

  }
}
