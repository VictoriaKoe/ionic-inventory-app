import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage implements OnInit {

  public settingPages = [
    { title: 'Account', url: '', icon: 'person-circle' },
    { title: 'Notifications', url: '', icon: 'notifications' },
    { title: 'Appearance', url: '', icon: 'eye'},
    { title: 'About', url: '', icon: 'help-circle'}
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  // naviagte to specific page
  navigateForward(path: string) {
    this.navCtrl.navigateForward('path');
  }

}
