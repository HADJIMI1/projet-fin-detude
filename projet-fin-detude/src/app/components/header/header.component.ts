import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) { }
 goToHomePage(){
  this.router.navigate(['']);
 }

  goToProductPage() {
    this.router.navigate(['/product'])
  }
  goToCartPage(){
    this.router.navigate(['/cart'])
  }

  goToContactPage(){
    this.router.navigate(['/contact'])
  }
  goToLoginPage(){
    this.router.navigate(['/login'])
  }
}
