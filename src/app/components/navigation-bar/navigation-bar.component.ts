import { Component, Input, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons,
  IonMenuButton, 
  IonButton, 
  IonIcon
} from '@ionic/angular/standalone';

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
    IonIcon
  ],
})
export class NavigationBarComponent  implements OnInit {

  @Input() name?: string;

  constructor() { }

  ngOnInit() {}

}
