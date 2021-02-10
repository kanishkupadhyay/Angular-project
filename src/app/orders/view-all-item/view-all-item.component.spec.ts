import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllItemComponent } from './view-all-item.component';

describe('ViewAllItemComponent', () => {
  let component: ViewAllItemComponent;
  let fixture: ComponentFixture<ViewAllItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
