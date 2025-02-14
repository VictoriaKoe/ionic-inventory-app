import { Component, Input, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonButtons,
  IonMenuButton, 
  IonButton, 
  IonIcon,
  IonImg,
} from '@ionic/angular/standalone';
import { Router} from '@angular/router';
import { UserProfilePopoverComponent } from '../user-profile-popover/user-profile-popover.component';
import { PopoverController } from '@ionic/angular';
import { CommonModule } from '@angular/common';


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
    IonIcon,
    CommonModule,
    IonImg
  ],
})
export class NavigationBarComponent implements OnInit {

  @Input() name?: string;

  constructor(private route: Router, private popCtrl: PopoverController) { }

  ngOnInit() {}

  // // redirect to user profile pg
  // toUserProfile() {
  //   this.route.navigate(['user-profile']);
  // }

  // opt feature
  async presentSettingPopover(event: Event) {
    const popover = await this.popCtrl.create({
      component: UserProfilePopoverComponent,
      event: event,
      // translucent: false,
      // size: "cover",
      dismissOnSelect: true,
      side: "bottom",
      // arrow: true
    });

    await popover.present();

  }

}
