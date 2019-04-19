import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1575Component } from './comp1575.component';

describe('Comp1575Component', () => {
  let component: Comp1575Component;
  let fixture: ComponentFixture<Comp1575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
