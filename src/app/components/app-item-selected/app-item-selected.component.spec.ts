import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemSelectedComponent } from './app-item-selected.component';

describe('AppItemSelectedComponent', () => {
  let component: AppItemSelectedComponent;
  let fixture: ComponentFixture<AppItemSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppItemSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppItemSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
