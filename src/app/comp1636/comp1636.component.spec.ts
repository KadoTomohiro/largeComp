import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1636Component } from './comp1636.component';

describe('Comp1636Component', () => {
  let component: Comp1636Component;
  let fixture: ComponentFixture<Comp1636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
