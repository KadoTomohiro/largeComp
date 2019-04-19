import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1648Component } from './comp1648.component';

describe('Comp1648Component', () => {
  let component: Comp1648Component;
  let fixture: ComponentFixture<Comp1648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
