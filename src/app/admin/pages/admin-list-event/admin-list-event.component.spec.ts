import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListEventComponent } from './admin-list-event.component';

describe('AdminListEventComponent', () => {
  let component: AdminListEventComponent;
  let fixture: ComponentFixture<AdminListEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
