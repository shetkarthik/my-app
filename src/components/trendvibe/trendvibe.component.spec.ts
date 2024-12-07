import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendvibeComponent } from './trendvibe.component';

describe('TrendvibeComponent', () => {
  let component: TrendvibeComponent;
  let fixture: ComponentFixture<TrendvibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendvibeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendvibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
