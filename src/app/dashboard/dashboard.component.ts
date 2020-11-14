import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  menu = [
    { path: '/admin/covid', title: 'Covid' },
    { path: '/admin/chuck-norris', title: 'Chuck Norris' },
    { path: '/admin/number', title: 'Números' },
    { path: '/welcome', title: 'Welcome' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
