import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroceryListItemComponent } from './grocery-list-item.component';

describe('GroceryListItemComponent', () => {
  let component: GroceryListItemComponent;
  let fixture: ComponentFixture<GroceryListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GroceryListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
