import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Navbar } from "./shared/components/navbar/navbar";
import { About } from "./features/about/about";
import { Activities } from "./features/activities/activities";
import { Gallery } from "./features/gallery/gallery";
import { SidebarAnnouncements } from "./shared/components/sidebar-announcements/sidebar-announcements";
import { Footer } from "./shared/components/footer/footer";
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, About, Activities, Gallery, SidebarAnnouncements, Footer],
  templateUrl: './layout/main-layout/main-layout.html',
  styleUrl: './layout/main-layout/main-layout.css'
})

  export class App implements AfterViewInit {

  async ngAfterViewInit() {
    // prevents SSR error
    if (typeof window !== 'undefined') {
      const flowbite = await import('flowbite');
      flowbite.initFlowbite();
    }
  }
}
