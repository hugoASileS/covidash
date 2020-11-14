import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberComponent } from './number.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NumbersService } from '../../services/numbers.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [NumbersService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
