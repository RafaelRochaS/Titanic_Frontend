import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    const debugElement = fixture.debugElement.query(By.css('h1'));
    expect(debugElement).toBeTruthy();
  });

  it('should have sub-header', () => {
    const debugElement = fixture.debugElement.query(By.css('h2'));
    expect(debugElement).toBeTruthy();
  });

  it('should have button', () => {
    const debugElement = fixture.debugElement.query(By.css('button'));
    expect(debugElement).toBeTruthy();
  });
});
