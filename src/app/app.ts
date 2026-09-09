import { Component, signal } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Home } from './home/home';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-portfolio-app');
}
