import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimaryButtonComponent } from './primary-button.component';

describe('PrimaryButtonComponent', () => {
  let component: PrimaryButtonComponent;
  let fixture: ComponentFixture<PrimaryButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PrimaryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
