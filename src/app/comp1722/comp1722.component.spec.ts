import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1722Component } from './comp1722.component';

describe('Comp1722Component', () => {
  let component: Comp1722Component;
  let fixture: ComponentFixture<Comp1722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
