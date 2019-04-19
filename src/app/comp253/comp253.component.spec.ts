import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp253Component } from './comp253.component';

describe('Comp253Component', () => {
  let component: Comp253Component;
  let fixture: ComponentFixture<Comp253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
