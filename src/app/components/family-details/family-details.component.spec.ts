import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDetailsComponent } from './family-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('FamilyDetailsComponent', () => {
  let component: FamilyDetailsComponent;
  let fixture: ComponentFixture<FamilyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ FamilyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDetailsComponent);
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

  it('should have sibilings form field', () => {
    const sibilings = fixture.debugElement.query(By.css('#sibilings'));
    expect(sibilings).toBeTruthy();
  });

  it('should have children form field', () => {
    const children = fixture.debugElement.query(By.css('#children'));
    expect(children).toBeTruthy();
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
