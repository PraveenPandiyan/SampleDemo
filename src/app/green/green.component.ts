import { Component, OnInit } from '@angular/core';
import { GreenService } from 'src/green.service';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

  constructor(private greenService: GreenService) { }
  public Items= [];
  ngOnInit() {
    this.greenService. getItems()
        .subscribe(data => this.Items= data);


}
}
