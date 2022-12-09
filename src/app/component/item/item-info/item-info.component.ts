import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/entities/cart';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent {

  @Input() cart!: Cart;
  @Output() updateCart = new EventEmitter<boolean>();

  add() {
    let userString = localStorage.getItem("user");
    if (userString != null) {
      let user = JSON.parse(userString);
      let cardFound = user.card.find((card: Cart) => card.item.name == this.cart.item.name);
      //add one more of this product in the cart
      let index = user.card.indexOf(cardFound);
      cardFound.numberOfItem++;
      user.card[index] = cardFound;
      localStorage.setItem("user", JSON.stringify(user));
      this.updateCart.emit(true);
    }
  }

  remove() {
    let userString = localStorage.getItem("user");
    if (userString != null) {
      let user = JSON.parse(userString);
      let cardFound = user.card.find((card: Cart) => card.item.name == this.cart.item.name);
      //add one more of this product in the cart
      let index = user.card.indexOf(cardFound);
      if(cardFound.numberOfItem > 1) {
        cardFound.numberOfItem--;
        user.card[index] = cardFound;
      } else if(cardFound.numberOfItem = 1){
        user.card.splice(index,1);
      }
      localStorage.setItem("user", JSON.stringify(user));
      this.updateCart.emit(true);
    }
  }
}
