import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
  standalone: false
})
export class WelcomePagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
    // Navigate to home page after animation
    setTimeout(() => {
      //navigation logic to loader before navigate to login page
      this.router.navigate(['loader'])
    }, 5000);
  }

}
