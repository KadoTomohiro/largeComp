import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp657Component } from './comp657.component';

describe('Comp657Component', () => {
  let component: Comp657Component;
  let fixture: ComponentFixture<Comp657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
