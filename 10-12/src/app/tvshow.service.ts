import { Injectable } from '@angular/core';
import { ITvShow } from './tvshow/ITvshow';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  // allTvShows:any;
  api_key = '738eff14b7c65fdbac7964099afa9864';
  urlBase = 'https://api.themoviedb.org/3';
  constructor(public http: HttpClient) { }

  getAllTvShows(lang:string,pageNamber:number=1): Observable<any> {
    return this.http.get(`${this.urlBase}/discover/tv?api_key=${this.api_key}&page=${pageNamber}&language=${lang}&with_origin_country=US`);
  }
  getMovieById(tvShowId: number): Observable<any> {
    return this.http.get(
      `${this.urlBase}/tv/${tvShowId}?api_key=${this.api_key}`
    );
  }
  
  searchTvShow(movieName:string,lang:string):Observable<any>{
    if(movieName==''){
      return this.getAllTvShows(lang);
    }else{
      return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.api_key}&query=${movieName}`)
    }
  }


  // getAllTvShows():ITvShow[]{
  //   return this.allTvShows;
  // }
}
