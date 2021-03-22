import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import {PostsService} from './services/posts.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './pipes/summary.pipes';

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
