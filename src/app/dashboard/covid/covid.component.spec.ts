import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidComponent } from './covid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CovidComponent', () => {
  let component: CovidComponent;
  let fixture: ComponentFixture<CovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
