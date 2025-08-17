import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Card from '../../models/card';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    public cardList: Array<Card> = [
      {
        productName: "samsung-s23",
        imageUrl: 'https://kdjqsudh',
        price: "13"
      },
      {
        productName: "samsung-s23",
        imageUrl: 'https://kdjqsudh',
        price: "13"
      },
      {
        productName: "samsung-s23",
        imageUrl: 'https://kdjqsudh',
        price: "13"
      },
      {
        productName: "samsung-s23",
        imageUrl: 'https://kdjqsudh',
        price: "13"
      }
    ]
}
