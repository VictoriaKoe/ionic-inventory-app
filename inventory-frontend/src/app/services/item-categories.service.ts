import {Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, query, where } from 'firebase/firestore';
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
export class ItemCategoriesService {

  private categoryList: any[] = [];
  private categoryName: string = '';

  constructor(
    private firestore: AngularFirestore,
    private fs: Firestore
  ) { 

    // get category from database
    this.firestore.collection("categories").get().subscribe((snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.categoryList.push(doc.data());
      });
    })
  }

  // get category list
  getCategoryList(): any[] {
    return this.categoryList;
  }

  // set category list
  setCategoryList(newCatList: any): void {
    this.categoryList = newCatList;
  }

  // clear category list
  clearCategoryList(): void {
    this.categoryList = [];
  }

  // get category name
  getCategoryName(): string {
    return this.categoryName;
  }

  // set category name 
  setCategoryName(newCatName: string): void {
    this.categoryName = newCatName;
  }

  getItemByCategory(uid: any, category: string): Observable<Item[]> {

    // Create reference to items collection
    const itemsRef = collection(this.fs, 'items');

    // Create query to get the current user
    const refq = query(itemsRef, where('uid', '==', uid), where('cat_name', '==', category));

    return collectionData(refq, { idField: 'id' }) as Observable<Item[]>
  }

}




