import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.page.html',
  styleUrls: ['./item-view.page.scss'],
  standalone: false
})
export class ItemViewPage implements OnInit {

  isSearchOpen: boolean = false;

  constructor() { 
    addIcons({search});
  }

  ngOnInit() {
  }

  // toogle the search
  isSearchOpened() {
    this.isSearchOpen = !this.isSearchOpen;
  }

}
