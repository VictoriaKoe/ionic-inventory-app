import { Component, Input, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonButtons,
  IonMenuButton, 
  IonButton, 
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  imports: [
    IonHeader,  
    IonToolbar, 
    IonButton, 
    IonButtons, 
    IonMenuButton,
    IonIcon
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

}
