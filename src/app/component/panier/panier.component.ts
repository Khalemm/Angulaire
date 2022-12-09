import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/entities/cart';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  user!:User;
  total:number = 0;

  constructor(){
  }

  ngOnInit(): void {
    this.getPanier();
    this.calculTotal();
  }

  getPanier() {
    const userString = localStorage.getItem("user");
    if(userString != null){
      this.user = JSON.parse(userString);
    }
  }

  calculTotal() {
    this.total = 0;
    this.user.card.forEach((card:Cart)=> {
      this.total += card.numberOfItem * card.item.price;
    })
  }

  update() {
    this.getPanier();
    this.calculTotal();
  }

}
