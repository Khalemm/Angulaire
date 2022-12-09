import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/entities/cart';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit{

  @Input() item!:Item;
  @Output() swapTitle = new EventEmitter<boolean>();
  itemAdded:boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  onHover(){
    this.swapTitle.emit(true);
    
  }

  onLeave(){
    this.swapTitle.emit(false);
  }

  addItem() {
    let userString = localStorage.getItem("user");
    if(userString != null){
      let user = JSON.parse(userString);
      let cardFound = user.card.find((card: Cart) => card.item.name == this.item.name);
      if(cardFound == undefined) {
        //add the product in the cart
        const card:Cart = {numberOfItem:1,item:this.item};
        user.card.push(card)
      } else {
        //add one more of this product in the cart
        let index = user.card.indexOf(cardFound);
        cardFound.numberOfItem++;
        user.card[index] = cardFound;
      }
      localStorage.setItem("user", JSON.stringify(user));
    }
    this.itemAdded = true;
  }
}
