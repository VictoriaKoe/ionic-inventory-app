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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

     // dummy data
     this.categoryData = [
      {
        cat_name: 'Books'
      },

      {
        cat_name: 'Official KPOP Merchandise'
      },

      {
        cat_name: 'Official Character Merchandise'
      }
    ];

    // get category data (lookup table) from db  

  }

  // navigate to category page
  navigateCategoryPage() {
    this.navCtrl.navigateForward('');
    
  }

}
