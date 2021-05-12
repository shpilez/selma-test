import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mobileWidth: boolean;
  navItems = [
    'Računovodstvo',
    'Naplata',
    'Budžet',
    'Zaposlenici',
    'Obuke',
    'Investicije',
    'Izvještaji',
  ];

  constructor() {
    this.mobileWidth = window.innerWidth < 600;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileWidth = window.innerWidth < 600;
  }

  ngOnInit(): void {}
}
