import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAnnouncements } from './sidebar-announcements';

describe('SidebarAnnouncements', () => {
  let component: SidebarAnnouncements;
  let fixture: ComponentFixture<SidebarAnnouncements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarAnnouncements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAnnouncements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
