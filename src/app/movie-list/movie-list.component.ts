import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  ngOnInit() {
    window.addEventListener('movieSearchResult', (event: any) => {
      this.movies = event.detail;
    });
  }
}
