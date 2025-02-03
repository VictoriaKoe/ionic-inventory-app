import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: false
})
export class CategoryPage implements OnInit {

  categoryData: any[] = [];
  categoryIconArray: any[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

     // dummy data
     this.categoryData = [
      {
        cat_name: 'Books'
      },

      {
        cat_name: 'Magazines'
      },

      {
        cat_name: 'Official KPOP Merchandise'
      }
    ];

    // get category data (lookup table) from db  


    // category icon (constant)
    this.categoryIconArray = ['book', 'newspaper', 'heart-circle', 'happy', 'sparkles']

  }

  // navigate to category page
  navigateCategoryPage() {
    // todo: set category name to render correct item of each cat when navigating


    // navigate to category item page
    this.navCtrl.navigateForward('category-items');
  }

}
