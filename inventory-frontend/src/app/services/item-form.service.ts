import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { UserViewService } from './user-view.service';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginAuthService } from './login-auth.service';
import { Observable } from 'rxjs';

interface Item {
  item_name: string;
  description: string;
  origin: string;
  cat_name: string;
  item_status: string;
  item_value: number;
  uid: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemFormService {

  private itemFormDetails: any[] = [];
  private itemList: any[] = [];

  constructor(
    private notiService: NotificationService,
    private userService: UserViewService,
    private firestore: Firestore,
    private fs: AngularFirestore,

  ) {

  
     // get all item collections from database
     this.fs.collection("items").get().subscribe((snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.itemList.push(doc.data());
      });
    })
  }

  // save item data to firestore
  async addItemToDB(data: any) {

    // create item collection
    const itemRef = doc(this.firestore, `items/${data['item_name']}`);

    // add data to firestore
    await setDoc(itemRef, {
      item_name: data['item_name'],
      description: data['item_description'],
      origin: data['item_origin'],
      cat_name: data['item_category'],
      item_status: data['item_status'],
      item_value: data['item_value'],
      item_image: data['item_image'],
      uid: this.userService.getUserID(),
    })

    console.log("Item is successfully save to Firestore");
    
    // toast msg when success register
    await this.notiService.showSuccess('Successfully Add Item');
  }

  // get item form data
  getitemFormDetails(): any[] {
    return this.itemFormDetails;
  }

  // set add item form data 
  setitemFormDetails(itemFormData: any): void {
    this.itemFormDetails.push(itemFormData);
  }

  // clear add item form data 
  clearitemFormDetails(): void {
    this.itemFormDetails = [];
  }

  // get item list from db
  getItemList(uid: any): Observable<Item[]>{
      // Create reference to items collection
      const itemsRef = collection(this.firestore, 'items');
      
      // Create query
      const refq = query(itemsRef, where('uid', '==', uid));
      
      return collectionData(refq, { idField: 'id' }) as Observable<Item[]>;
    }
    
}
