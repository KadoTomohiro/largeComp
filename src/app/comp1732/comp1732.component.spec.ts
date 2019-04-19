import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1732Component } from './comp1732.component';

describe('Comp1732Component', () => {
  let component: Comp1732Component;
  let fixture: ComponentFixture<Comp1732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
