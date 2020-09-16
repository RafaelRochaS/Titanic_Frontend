import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsComponent } from './personal-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailsComponent;
  let fixture: ComponentFixture<PersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ PersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have paragraph', () => {
    const html: HTMLElement = fixture.nativeElement;
    const p = html.querySelector('p');
    expect(p).toBeTruthy();
  });

  it('should have image', () => {
    const html: HTMLElement = fixture.nativeElement;
    const img = html.querySelector('img');
    expect(img).toBeTruthy();
  });

  it('should have name form field', () => {
    const name = fixture.debugElement.query(By.css('#name'));
    expect(name).toBeTruthy();
  });

  it('should have age form field', () => {
    const age = fixture.debugElement.query(By.css('#age'));
    expect(age).toBeTruthy();
  });

  it('should have ticket form field', () => {
    const ticket = fixture.debugElement.query(By.css('#ticket'));
    expect(ticket).toBeTruthy();
  });

  it('should have gender form field', () => {
    const gender = fixture.debugElement.query(By.css('#gender'));
    expect(gender).toBeTruthy();
  });

  it('should have port form field', () => {
    const port = fixture.debugElement.query(By.css('#port'));
    expect(port).toBeTruthy();
  });

  it('should have back button', () => {
    const backButton = fixture.debugElement.query(By.css('#btn-back'));
    expect(backButton).toBeTruthy();
  });

  it('should have next button', () => {
    const nextButton = fixture.debugElement.query(By.css('#btn-next'));
    expect(nextButton).toBeTruthy();
  });
});
