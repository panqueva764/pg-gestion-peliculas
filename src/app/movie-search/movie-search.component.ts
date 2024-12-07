import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  query: string = '';

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.query.trim().length >= 3) {
      this.movieService.searchMovies(this.query).subscribe((response) => {
        // Emitimos el resultado al componente padre para que lo maneje
        if (response && response.Search) {
          window.dispatchEvent(
            new CustomEvent('movieSearchResult', { detail: response.Search })
          );
        }
      });
    } else {
      alert('Debes escribir al menos 3 caracteres');
    }
  }
}
