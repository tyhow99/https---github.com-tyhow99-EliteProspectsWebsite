import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPortalComponent } from './ranking-portal.component';

describe('RankingPortalComponent', () => {
  let component: RankingPortalComponent;
  let fixture: ComponentFixture<RankingPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
