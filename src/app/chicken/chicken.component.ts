import { Component, OnInit } from '@angular/core';
import { ChickenService } from 'src/chicken.service';
@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {

  constructor(private chickenService: ChickenService) { }
  public Items= [];
  ngOnInit() {
    this.chickenService. getItems()
        .subscribe(data => this.Items= data);
  }

}
