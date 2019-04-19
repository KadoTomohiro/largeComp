import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp526Component } from './comp526.component';

describe('Comp526Component', () => {
  let component: Comp526Component;
  let fixture: ComponentFixture<Comp526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
