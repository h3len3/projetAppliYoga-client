import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEventComponent } from './pop-up-event.component';

describe('PopUpEventComponent', () => {
  let component: PopUpEventComponent;
  let fixture: ComponentFixture<PopUpEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
