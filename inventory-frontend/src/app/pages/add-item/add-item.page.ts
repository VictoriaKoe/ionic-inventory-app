import { Component, inject, OnInit, ViewChild} from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { IonTextarea } from '@ionic/angular/standalone';
import { ImageUploadComponentComponent } from 'src/app/components/image-upload-component/image-upload-component.component';
import { ItemCategoriesService } from 'src/app/services/item-categories.service';
import { ItemStatusService } from 'src/app/services/item-status.service';
import { Firestore } from '@angular/fire/firestore';
import { ItemFormService } from 'src/app/services/item-form.service';

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
  @ViewChild('describe') describe!: IonTextarea;
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
  private firestore = inject(Firestore);

  constructor(
    private itemStatus: ItemStatusService, 
    private categoryData: ItemCategoriesService,
    private itemFormService: ItemFormService,
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
    console.log(form);

    if (form) {
      // reset form 
      form.reset();

      // clear other values
      this.describe.value = '';
      this.selectOpt.value = null;
      this.statusOpt.value = [];
      this.itemImg.resetUpload();

      // clear all form
      if (form === null) {
        console.log("clear form sucessfully");
      }
    }
  }

  // todo: add item details to db 
  async addItemForm() {
    console.log("invoke add item form");
    // test tag value
    console.log("category: " + this.selectOpt.value, "status: " + this.statusOpt.value);

    // get add item form html page
    const form = document.querySelector('form') as HTMLFormElement;

    // if form exist, get all input vals from form 
    if (form) {

      const formData = new FormData(form);
      const formDataObject: { [key: string]: string | File | number | boolean } = {};

      // process each form field
      formData.forEach((value, key) => {
        if (value instanceof File) {
          // formDataObject[key] = value;
          // convert image file to base64
          const image = this.itemImg.getImageURL();
          console.log(image);
          formDataObject[key] = image;
        }
        else {
          // add data to form object
          formDataObject[key] = value;
        }
      });

      // todo: save to db
      console.log(formDataObject); // item obj

      // save item data to firestore
      this.itemFormService.addItemToDB(formDataObject);
    }

    else {
      console.error("form not exists.");
    }

  }
}
