import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickmortyService {

  private url = 'https://rickandmortyapi.com/api';
  constructor(private http:HttpClient) { }

  

//Obtener todos los epidsodios
getEpisodes(): Observable<EpisodeResponse> {
  return this.http.get<EpisodeResponse>(`${this.url}/episode`);
}
  
  //obtener los personajes de los capitulos
  getCharacters(characterUrls: string[]): Observable<any[]> {
    return new Observable(observer => {
      const characterRequests = characterUrls.map(url => this.http.get(url));
      Promise.all(characterRequests.map(req => req.toPromise()))
        .then(responses => {
          observer.next(responses);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }


}

interface EpisodeResponse {
  results: any[];
}


