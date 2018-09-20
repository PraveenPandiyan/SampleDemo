import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FruitComponent } from './fruit/fruit.component';
import { GreenComponent } from './green/green.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BeanComponent } from './bean/bean.component';
import { PepperComponent } from './pepper/pepper.component';
import { BruschettaComponent } from './bruschetta/bruschetta.component';
import { CarrotComponent } from './carrot/carrot.component';
import { CherryComponent } from './cherry/cherry.component';
import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path: '', component: FirstComponent
    },
    {
        path: '1', component: SecondComponent
    },
    {
        path: '2', component: FruitComponent
    },
    {
        path: '3', component: GreenComponent
    },
    {
        path: '4', component: ChickenComponent
    },
    {
        path: '5', component: BeanComponent
    },
    {
        path: '6', component: PepperComponent
    },
    {
        path: '7', component: BruschettaComponent
    },
    {
        path: '8', component: CarrotComponent
    },
    {
        path: '9', component: CherryComponent
    }
]