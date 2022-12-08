import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit{

  @Input() item!:Item;

  constructor() {}

  ngOnInit(): void {
      console.log(this.item);
      
  }
}
