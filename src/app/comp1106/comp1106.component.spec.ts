import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1106Component } from './comp1106.component';

describe('Comp1106Component', () => {
  let component: Comp1106Component;
  let fixture: ComponentFixture<Comp1106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
