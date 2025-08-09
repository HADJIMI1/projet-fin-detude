import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import Card from '../../models/card';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    public cardList: Array<Card> = [
      {
        productName : "Nokia",
        imageUrl: 'https://jkusdhqhs',
        price : "200"
      },
      {
        productName : "Samsung",
        imageUrl: 'https://jkusdhqhs',
        price : "200"
      },
      {
        productName : "Apple",
        imageUrl: 'https://jkusdhqhs',
        price : "200"
      },
      {
        productName : "Google",
        imageUrl: 'https://jkusdhqhs',
        price : "200"
      }
    ]

    public url:string = "http://hyshshs" 

    public nom:string = ''
}
