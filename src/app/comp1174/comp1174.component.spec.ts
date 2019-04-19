import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1174Component } from './comp1174.component';

describe('Comp1174Component', () => {
  let component: Comp1174Component;
  let fixture: ComponentFixture<Comp1174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
