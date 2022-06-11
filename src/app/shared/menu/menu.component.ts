import { Component, OnInit } from '@angular/core';

interface MenuItem {
  path: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = [
    {path: '/charts/bars', name: 'Bars'},
    {path: '/charts/double-bars', name: 'Double bars'},
    {path: '/charts/doughnut', name: 'Doughnut'},
    {path: '/charts/doughnut-http', name: 'Doughnut (HTTP)'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
