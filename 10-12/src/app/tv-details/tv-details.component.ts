import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  basepath = 'https://image.tmdb.org/t/p/w780';
  selectedTvShow!:any;
  selectedTvShowId: any = '';
  tvShowGenres:any[]=[];

  constructor(public myRouts: ActivatedRoute, public myTvShow:TvshowService) { }

  ngOnInit(): void {
    this.selectedTvShowId = this.myRouts.snapshot.paramMap.get('id');
    this.myTvShow.getMovieById(this.selectedTvShowId).subscribe({
      next:(singleMovie)=>{
        this.selectedTvShow=singleMovie;
        this.tvShowGenres=singleMovie.genres;
        console.log(singleMovie.genres);
        
      }
    });
   
  }

}
