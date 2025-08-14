import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Servicios } from './servicios/servicios';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [Servicios, Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'barberia-angular';
}
