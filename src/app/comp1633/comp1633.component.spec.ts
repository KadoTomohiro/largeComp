import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1633Component } from './comp1633.component';

describe('Comp1633Component', () => {
  let component: Comp1633Component;
  let fixture: ComponentFixture<Comp1633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
