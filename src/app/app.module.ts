import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';

import { RestaurantsService } from './restaurants.service';
import { DisplayComponent } from './display/display.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
