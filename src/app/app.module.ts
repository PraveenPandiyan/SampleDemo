import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SaladService } from '../salad.service';
import { IngredientsService } from '../ingredients.service';
import { FruitService } from '../fruit.service';
import { GreenService } from '../green.service';
import { ChickenService } from '../chicken.service';
import { BeanService } from '../bean.service';
import { PepperService } from '../pepper.service';
import { BruschettaService } from '../bruschetta.service';
import { CarrotService } from '../carrot.service';
import { CherryService } from '../cherry.service';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {RouterModule} from '@angular/router';
import {routes}  from './app.routes';
import { FruitComponent } from './fruit/fruit.component';
import { GreenComponent } from './green/green.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BeanComponent } from './bean/bean.component';
import { PepperComponent } from './pepper/pepper.component';
import { BruschettaComponent } from './bruschetta/bruschetta.component';
import { CarrotComponent } from './carrot/carrot.component';
import { CherryComponent } from './cherry/cherry.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FruitComponent,
    GreenComponent,
    ChickenComponent,
    BeanComponent,
    PepperComponent,
    BruschettaComponent,
    CarrotComponent,
    CherryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SaladService,IngredientsService,FruitService,GreenService,ChickenService,BeanService,
    PepperService,BruschettaService,CarrotService,CherryService],
  bootstrap: [AppComponent]
})


export class AppModule { }
