import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
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

  it('should have back button', () => {
    const backButton = fixture.debugElement.query(By.css('#btn-back'));
    expect(backButton).toBeTruthy();
  });
});
