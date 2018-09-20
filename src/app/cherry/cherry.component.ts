import { Component, OnInit } from '@angular/core';
import { CherryService } from 'src/cherry.service';

@Component({
  selector: 'app-cherry',
  templateUrl: './cherry.component.html',
  styleUrls: ['./cherry.component.css']
})
export class CherryComponent implements OnInit {

  constructor(private cherryService: CherryService) { }
  public Items= [];
  ngOnInit() {
    this.cherryService. getItems()
        .subscribe(data => this.Items= data);

    

  }

}
