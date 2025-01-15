import { Component, Input, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons,
  IonMenuButton, 
  IonButton, 
  IonIcon,
  IonMenu, 
  IonContent, 
  IonMenuToggle
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  imports: [
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButton, 
    IonButtons, 
    IonMenuButton,
    IonIcon,
    IonMenu,
    IonContent,
    IonMenuToggle
  ],
})
export class NavigationBarComponent implements OnInit {

  @Input() name?: string;

  constructor(private route: Router) { }

  ngOnInit() {}

  // redirect to user profile pg
  toUserProfile() {
    this.route.navigate(['user-profile']);
  }

  // set navigation 

}
