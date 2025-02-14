import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemCategoriesService } from 'src/app/services/item-categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: false
})
export class CategoryPage implements OnInit {

  categoryList: any[] = [];
  categoryIconArray: any[] = [];

  constructor(
    private navCtrl: NavController, 
    private categoryService: ItemCategoriesService
  ) { }

  ngOnInit() {
    
    // get category data (lookup table) from db  
    this.categoryList = this.categoryService.getCategoryList();

    // category icon (constant)
    this.categoryIconArray = ['book', 'newspaper', 'heart-circle', 'happy', 'sparkles']

  }

  // navigate to specific category page
  navigateItemCategoryPage(categoryName: string) {
    // todo: set category name to render correct item of each cat when navigating
    this.categoryService.setCategoryName(categoryName);

    // navigate to category item page
    this.navCtrl.navigateForward('category-items');
  }

}
