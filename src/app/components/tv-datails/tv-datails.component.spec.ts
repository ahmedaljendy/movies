import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDatailsComponent } from './tv-datails.component';

describe('TvDatailsComponent', () => {
  let component: TvDatailsComponent;
  let fixture: ComponentFixture<TvDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvDatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
