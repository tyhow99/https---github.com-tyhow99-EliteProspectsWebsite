import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPShopComponent } from './epshop.component';

describe('EPShopComponent', () => {
  let component: EPShopComponent;
  let fixture: ComponentFixture<EPShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
