import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurehubComponent } from './curehub.component';

describe('CurehubComponent', () => {
  let component: CurehubComponent;
  let fixture: ComponentFixture<CurehubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurehubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
