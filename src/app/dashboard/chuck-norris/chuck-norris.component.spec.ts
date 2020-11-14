import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisComponent } from './chuck-norris.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChuckNorrisComponent', () => {
  let component: ChuckNorrisComponent;
  let fixture: ComponentFixture<ChuckNorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChuckNorrisComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
