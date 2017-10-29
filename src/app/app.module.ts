import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, HeaderCarouselComponent, MenuComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
