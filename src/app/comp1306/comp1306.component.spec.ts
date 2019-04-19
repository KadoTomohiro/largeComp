import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1306Component } from './comp1306.component';

describe('Comp1306Component', () => {
  let component: Comp1306Component;
  let fixture: ComponentFixture<Comp1306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
