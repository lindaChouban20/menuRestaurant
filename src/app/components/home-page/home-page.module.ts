import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomePageModule {}
