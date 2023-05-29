import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCategoryComponent } from './button-category.component';

describe('ButtonCategoryComponent', () => {
  let component: ButtonCategoryComponent;
  let fixture: ComponentFixture<ButtonCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCategoryComponent]
    });
    fixture = TestBed.createComponent(ButtonCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
