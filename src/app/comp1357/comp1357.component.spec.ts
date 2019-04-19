import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1357Component } from './comp1357.component';

describe('Comp1357Component', () => {
  let component: Comp1357Component;
  let fixture: ComponentFixture<Comp1357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
