import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1573Component } from './comp1573.component';

describe('Comp1573Component', () => {
  let component: Comp1573Component;
  let fixture: ComponentFixture<Comp1573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
