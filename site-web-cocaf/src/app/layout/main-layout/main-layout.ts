import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Gallery } from '../../features/gallery/gallery';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Activities } from '../../features/activities/activities';
import { Footer } from '../../shared/components/footer/footer';
import { SidebarAnnouncements } from '../../shared/components/sidebar-announcements/sidebar-announcements';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Navbar, Gallery,Home, About, Activities, Footer, SidebarAnnouncements],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
