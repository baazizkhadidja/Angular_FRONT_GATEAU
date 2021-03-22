import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getGateau(){return [
    {"id":1, "name": "Halwa1"},
    {"id":2, "name": "Halwa2"},
    {"id":3, "name": "Halwa3"},
  ]}
}
