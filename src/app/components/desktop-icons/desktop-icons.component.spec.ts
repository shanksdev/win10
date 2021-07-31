import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopIconsComponent } from './desktop-icons.component';

describe('DesktopIconsComponent', () => {
  let component: DesktopIconsComponent;
  let fixture: ComponentFixture<DesktopIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
