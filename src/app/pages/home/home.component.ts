import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  toggleShowMore() { this.showMore = !this.showMore; }

  showMore = false;

  constructor() { }

  ngOnInit(): void {
  }

}
