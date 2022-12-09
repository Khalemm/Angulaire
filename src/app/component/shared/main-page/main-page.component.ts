import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemService } from 'src/app/service/item/item.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  items: Item[] = [];
  title: string = "Bienvenue dans mon shop Angulaire !";

  constructor(private itemService : ItemService){

  }

  ngOnInit() {
      this.itemService.getAllItems().subscribe(
        data => this.items.push(data)
      );
  }

  changeTitle(onHover : boolean){
    onHover == true ? this.title = "Quel SUPER produit Angularisée!" : this.title = "Bienvenue dans mon shop Angulaire !";
  }
}
