import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp637Component } from './comp637.component';

describe('Comp637Component', () => {
  let component: Comp637Component;
  let fixture: ComponentFixture<Comp637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
