import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
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

  it('should have next button', () => {
    const nextButton = fixture.debugElement.query(By.css('#btn-next'));
    expect(nextButton).toBeTruthy();
  });

  it('should have github button', () => {
    const githubButton = fixture.debugElement.query(By.css('#btn-github'));
    expect(githubButton).toBeTruthy();
  });

  it('should have paragraph', () => {
    const html: HTMLElement = fixture.nativeElement;
    const p = html.querySelector('p');
    expect(p).toBeTruthy();
  });

});
