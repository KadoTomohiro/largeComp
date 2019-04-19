import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1268Component } from './comp1268.component';

describe('Comp1268Component', () => {
  let component: Comp1268Component;
  let fixture: ComponentFixture<Comp1268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
