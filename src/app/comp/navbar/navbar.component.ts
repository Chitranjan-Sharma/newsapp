import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api: ApiService, private router: Router) { }
  getNews(category: string) {
    this.api.getNews(category);
    this.router.navigate([""]);
  }

}
