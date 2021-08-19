import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFieldComponent } from './parent-field.component';

describe('ParentFieldComponent', () => {
  let component: ParentFieldComponent;
  let fixture: ComponentFixture<ParentFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
