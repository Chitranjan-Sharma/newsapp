import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsData } from 'src/app/models/news-data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(public api: ApiService, private router:Router) { }

}
