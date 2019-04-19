import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1630Component } from './comp1630.component';

describe('Comp1630Component', () => {
  let component: Comp1630Component;
  let fixture: ComponentFixture<Comp1630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
