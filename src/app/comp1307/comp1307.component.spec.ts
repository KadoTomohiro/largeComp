import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1307Component } from './comp1307.component';

describe('Comp1307Component', () => {
  let component: Comp1307Component;
  let fixture: ComponentFixture<Comp1307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
