import { Component, OnInit } from '@angular/core';
import { CarrotService } from 'src/carrot.service';

@Component({
  selector: 'app-carrot',
  templateUrl: './carrot.component.html',
  styleUrls: ['./carrot.component.css']
})
export class CarrotComponent implements OnInit {

  constructor(private carrotService: CarrotService) { }
  public Items= [];
  ngOnInit() {
    this.carrotService. getItems()
        .subscribe(data => this.Items= data);

    

  }

}
