import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp284Component } from './comp284.component';

describe('Comp284Component', () => {
  let component: Comp284Component;
  let fixture: ComponentFixture<Comp284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
