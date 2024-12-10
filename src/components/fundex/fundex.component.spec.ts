import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundexComponent } from './fundex.component';

describe('FundexComponent', () => {
  let component: FundexComponent;
  let fixture: ComponentFixture<FundexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
