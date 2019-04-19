import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp574Component } from './comp574.component';

describe('Comp574Component', () => {
  let component: Comp574Component;
  let fixture: ComponentFixture<Comp574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
