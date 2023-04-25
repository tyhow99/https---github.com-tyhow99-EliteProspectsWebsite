import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PittsburghPenguinsComponent } from './pittsburgh-penguins.component';

describe('PittsburghPenguinsComponent', () => {
  let component: PittsburghPenguinsComponent;
  let fixture: ComponentFixture<PittsburghPenguinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PittsburghPenguinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PittsburghPenguinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
