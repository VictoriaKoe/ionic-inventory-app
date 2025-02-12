import {Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoriesService {

  private categoryList: any[] = [];
  private categoryName: string = '';

  constructor(private firestore: AngularFirestore) { 

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

}




