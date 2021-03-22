import { Component } from '@angular/core';
import {PostsService} from './services/posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gateaux: any[];
  
  item = {
    title:'New TV',
    price: 2199.99,
    sold: 4531,
    rating: 4.7655,
    date: new Date()
  };

  des ='sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
  constructor(postService:PostsService) { 
  
  this.gateaux = postService.getGateau()}


  
  

  }
