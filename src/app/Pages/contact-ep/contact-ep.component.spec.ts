import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEPComponent } from './contact-ep.component';

describe('ContactEPComponent', () => {
  let component: ContactEPComponent;
  let fixture: ComponentFixture<ContactEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
