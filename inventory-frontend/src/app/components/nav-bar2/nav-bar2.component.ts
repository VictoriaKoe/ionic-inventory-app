import { Component, Input, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonButtons,
  IonMenuButton, 
  IonButton, 
  IonIcon,
  IonBackButton,
  IonTitle,
  IonNavLink,
  IonImg
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.scss'],
  imports: [
    IonHeader,  
    IonToolbar, 
    IonButton, 
    IonButtons, 
    IonMenuButton,
    IonIcon,
    IonBackButton,
    IonTitle,
    IonNavLink,
    IonImg,
    CommonModule
  ],
})
export class NavBar2Component implements OnInit {

  @Input() name?: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  // navigate back to last page of history
  navBack() {
    this.navCtrl.back();
  }

}
