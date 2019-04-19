import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1056Component } from './comp1056.component';

describe('Comp1056Component', () => {
  let component: Comp1056Component;
  let fixture: ComponentFixture<Comp1056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
