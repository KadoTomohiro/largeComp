import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1683Component } from './comp1683.component';

describe('Comp1683Component', () => {
  let component: Comp1683Component;
  let fixture: ComponentFixture<Comp1683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
