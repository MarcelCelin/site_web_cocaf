import { CommonModule } from '@angular/common';
import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  activePopup: 'contacts' | 'email' | null = null;

  email = 'contact@monentreprise.com'

  contacts = [
    {name: 'Diacre Joel', phone: '+491725887931'},
    {name: 'Bertrand Momo', phone: '+4917646682733'}
  ];

  toggleContacts(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.activePopup = this.activePopup === 'contacts' ? null: 'contacts'; 
  }

  call(contact: any, event: Event) {
    event.stopPropagation();
    window.location.href = `tel:${contact.phone}`;
  }

  openEmailPopup(event: Event) {
    event.stopPropagation();
    this.activePopup = this.activePopup === 'email' ? null: 'email';
  }

  sendMail(event: Event) {
    event.stopPropagation();
    window.location.href = `mailto:${this.email}`;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.activePopup = null;
  }
}