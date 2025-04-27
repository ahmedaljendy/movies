import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDatailsComponent } from './all-datails.component';

describe('AllDatailsComponent', () => {
  let component: AllDatailsComponent;
  let fixture: ComponentFixture<AllDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
