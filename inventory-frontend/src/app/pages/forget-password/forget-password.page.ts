import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
  standalone: false
})
export class ForgetPasswordPage implements OnInit {

  recoverEmail: string = '';

  constructor(private authService: LoginAuthService, private notiService: NotificationService) { }

  ngOnInit() {
  }

  // action after clicking submit button
  async onSubmit(){
    console.log(this.recoverEmail);

    // todo: send user email to db to request pass recovering
   this.authService.resetPassword(this.recoverEmail); 
   this.notiService.showSuccess("Email is successfully sent to the registered email.");

  }

}
