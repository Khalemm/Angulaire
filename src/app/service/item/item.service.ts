import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/entities/item';
import itemData from 'src/assets/item.json';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  private items:Item[] = itemData;

  public getAllItems() : Observable<Item>{
    return from(this.items);
  }
}
