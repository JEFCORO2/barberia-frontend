import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { TeamSection } from './team-section/team-section';

@Component({
  selector: 'app-root',
  imports: [Hero, About, TeamSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'barberia-angular';
}
