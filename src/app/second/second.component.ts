import { Component, OnInit} from '@angular/core';
import { IngredientsService } from 'src/ingredients.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private ingredientsService: IngredientsService) { }
  public Items= [];
  ngOnInit() {
    this.ingredientsService. getItems()
        .subscribe(data => this.Items= data);

    

  }
 

}
