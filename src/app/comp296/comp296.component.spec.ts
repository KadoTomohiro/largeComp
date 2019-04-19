import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp296Component } from './comp296.component';

describe('Comp296Component', () => {
  let component: Comp296Component;
  let fixture: ComponentFixture<Comp296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
