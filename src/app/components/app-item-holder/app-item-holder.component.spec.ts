import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemHolderComponent } from './app-item-holder.component';

describe('AppItemHolderComponent', () => {
  let component: AppItemHolderComponent;
  let fixture: ComponentFixture<AppItemHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppItemHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppItemHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
