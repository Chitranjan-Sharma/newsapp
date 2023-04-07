import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ResponseBody } from '../models/response-body';
import { NewsData } from '../models/news-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "https://inshorts.deta.dev/news?category=";

  newsList: ResponseBody = new ResponseBody;

  newsData:NewsData = new NewsData;

  getNews(category: string) {
    this.http.get(this.baseUrl + category).subscribe((response) => {
      this.newsList = response as ResponseBody;
      console.log(this.newsList.data);
    },
      (error) => {
        alert(error);
      });
  }
}
