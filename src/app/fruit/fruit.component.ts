import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/fruit.service';
@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor(private fruitService: FruitService) { }
  public Items= [];
  ngOnInit() {
    this.fruitService. getItems()
        .subscribe(data => this.Items= data);

}
}