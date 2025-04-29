import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupbookingComponent } from './popupbooking.component';

describe('PopupbookingComponent', () => {
  let component: PopupbookingComponent;
  let fixture: ComponentFixture<PopupbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupbookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
