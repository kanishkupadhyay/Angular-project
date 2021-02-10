import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllItemByCategoryComponent } from './view-all-item-by-category.component';

describe('ViewAllItemByCategoryComponent', () => {
  let component: ViewAllItemByCategoryComponent;
  let fixture: ComponentFixture<ViewAllItemByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllItemByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllItemByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
