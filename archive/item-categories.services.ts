// import { inject, Injectable } from '@angular/core';
// import { doc, Firestore, setDoc } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class ItemCategoriesService {

//   private categoryList: any[] = [];
//   private categoryName: string = '';

//   constructor(private firestore: AngularFirestore) { 

//     // get category from database
//     this.firestore.collection("categories").get().subscribe((fs) => {
//       fs.docs.forEach((doc)=> {
//         this.categoryList.push(doc.data());
//       })
//     })
    
//     // // dummy data
//     // this.categoryList = [
//     //   {
//     //     cat_id: this.generateId(),
//     //     cat_name: "Books"
//     //   },

//     //   {
//     //     cat_id: this.generateId(),
//     //     cat_name: "Magazines"
//     //   },

//     //   {
//     //     cat_id: this.generateId(),
//     //     cat_name: "Official Character Merchandises"
//     //   },

//     //   {
//     //     cat_id: this.generateId(),
//     //     cat_name: "Official KPOP Merchandises"
//     //   },

//     //   {
//     //     cat_id: this.generateId(),
//     //     cat_name: "Fanmade Merchandises"
//     //   }
//     // ];
//   }

//   // dummy function to generate id
//   generateId() {
//     return Math.floor(Math.random() * 1000);
//   }

//   // get category list
//   getCategoryList(): any[] {
//     return this.categoryList;
//   }

//   // set category list
//   setCategoryList(newCatList: any): void {
//     this.categoryList = newCatList;
//   }

//   // clear category list
//   clearCategoryList(): void {
//     this.categoryList = [];
//   }

//   // get category name
//   getCategoryName(): string {
//     return this.categoryName;
//   }

//   // set category name 
//   setCategoryName(newCatName: string): void {
//     this.categoryName = newCatName;
//   }

// }




