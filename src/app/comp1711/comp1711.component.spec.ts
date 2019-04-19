import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1711Component } from './comp1711.component';

describe('Comp1711Component', () => {
  let component: Comp1711Component;
  let fixture: ComponentFixture<Comp1711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
