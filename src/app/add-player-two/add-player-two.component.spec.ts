import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerTwoComponent } from './add-player-two.component';

describe('AddPlayerTwoComponent', () => {
  let component: AddPlayerTwoComponent;
  let fixture: ComponentFixture<AddPlayerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayerTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlayerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
