import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPRinksideComponent } from './eprinkside.component';

describe('EPRinksideComponent', () => {
  let component: EPRinksideComponent;
  let fixture: ComponentFixture<EPRinksideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPRinksideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPRinksideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
