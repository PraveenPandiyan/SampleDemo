import { Component, OnInit } from '@angular/core';
import { SaladService } from  'src/salad.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';  
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private saladService: SaladService, @Inject(DOCUMENT) private document: any) { }

  public Items= [];
  ngOnInit() {

    this.saladService. getItems()
        .subscribe(data => this.Items = data);
  }
  goToUrl(Id:number): void {
    this.document.location.href = (Id);
}

}

