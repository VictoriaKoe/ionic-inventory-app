import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
  standalone: false
})
export class ForgetPasswordPage implements OnInit {

  recoverEmail: string = '';

  constructor() { }

  ngOnInit() {
  }

  // action after clicking submit button
  onSubmit(){
    console.log(this.recoverEmail);

    // todo: send user email to db to request pass recovering
    
  }

}
