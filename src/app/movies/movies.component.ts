import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [
    {id:1, name: 'Deewar'},
    {id:2, name:'Sholay'},
    {id:3, name:'Baazigar'},
    {id:4, name:'Housefull'}
  ];

  constructor() { }
  
  ngOnInit() {
  }

}
