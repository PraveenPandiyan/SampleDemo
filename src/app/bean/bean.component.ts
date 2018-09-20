import { Component, OnInit } from '@angular/core';
import { BeanService } from 'src/bean.service';

@Component({
  selector: 'app-bean',
  templateUrl: './bean.component.html',
  styleUrls: ['./bean.component.css']
})
export class BeanComponent implements OnInit {

  constructor(private beanService: BeanService) { }
  public Items= [];
  ngOnInit() {
    this.beanService. getItems()
        .subscribe(data => this.Items= data);

    

  }

}
