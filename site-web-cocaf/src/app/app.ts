import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Navbar } from "./shared/components/navbar/navbar";
import { About } from "./features/about/about";
import { Activities } from "./features/activities/activities";
import { Gallery } from "./features/gallery/gallery";
import { SidebarAnnouncements } from "./shared/components/sidebar-announcements/sidebar-announcements";
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, About, Activities, Gallery, SidebarAnnouncements, Footer],
  templateUrl: './layout/main-layout/main-layout.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-web-cocaf');
}
