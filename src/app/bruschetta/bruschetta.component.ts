import { Component, OnInit } from '@angular/core';
import { BruschettaService } from 'src/bruschetta.service';

@Component({
  selector: 'app-bruschetta',
  templateUrl: './bruschetta.component.html',
  styleUrls: ['./bruschetta.component.css']
})
export class BruschettaComponent implements OnInit {

  constructor(private bruschettaService: BruschettaService) { }
  public Items= [];
  ngOnInit() {
    this.bruschettaService. getItems()
        .subscribe(data => this.Items= data);
  }
}
