import { Component, OnInit } from '@angular/core';
import { PepperService } from 'src/pepper.service';

@Component({
  selector: 'app-pepper',
  templateUrl: './pepper.component.html',
  styleUrls: ['./pepper.component.css']
})
export class PepperComponent implements OnInit {

  constructor(private pepperService: PepperService) { }
  public Items= [];
  ngOnInit() {
    this.pepperService. getItems()
        .subscribe(data => this.Items= data);

    

  }

}
