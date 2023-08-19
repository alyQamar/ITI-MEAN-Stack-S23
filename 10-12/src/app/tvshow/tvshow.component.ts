import { Component, OnDestroy, OnInit } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { ITvShow } from './ITvshow';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent  implements OnDestroy,OnInit{
  allTvShows:any = [];
  totalPages: number = 0;
  currentPage: number = 1;
  lang: string = 'en-US';
  basepath = 'https://image.tmdb.org/t/p/w780';
  private search_value: string = '';
  constructor(protected tvService:TvshowService) {}
  ngOnInit(): void {
   this.allTvShows=this.tvService.getAllTvShows(this.lang, this.currentPage).subscribe({
    next:(apidata)=>{
      this.allTvShows = apidata.results
      this.totalPages = apidata.total_results
    }
   });
  }

  toggleLang() {
    this.lang = this.lang == 'ar-SA' ? 'en-US' : 'ar-SA';
    this.tvService.getAllTvShows(this.lang, this.currentPage).subscribe({
      next: (apiData) => {
        // console.log(apiData);
        this.allTvShows = apiData.results;
        this.totalPages = apiData.total_results;
      },
    });
  }

  set searchValue(val: string) {
    this.search_value = val;
    this.getSearchedTvShowes(val);
  }
  getSearchedTvShowes(searchData: string) {
    this.tvService.searchTvShow(searchData, this.lang).subscribe({
      next: (searchResults) => {
        this.allTvShows = searchResults.results;
      },
    });
  }


  changePage(pageData: PageEvent) {
    console.log(`page changed ${pageData.pageIndex}`);
    this.currentPage = pageData.pageIndex + 1;
    this.tvService.getAllTvShows(this.lang, this.currentPage).subscribe({
      next: (apiData) => {
        // console.log(apiData);
        this.allTvShows = apiData.results;
        this.totalPages = apiData.total_results;
      },
    });
  }
  ngOnDestroy(): void {
    console.log('component dead!');
    
  }
}

