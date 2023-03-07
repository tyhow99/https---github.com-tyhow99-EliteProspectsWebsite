import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSideBarComponent } from './team-side-bar.component';

describe('TeamSideBarComponent', () => {
  let component: TeamSideBarComponent;
  let fixture: ComponentFixture<TeamSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
