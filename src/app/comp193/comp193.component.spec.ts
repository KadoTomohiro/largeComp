import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp193Component } from './comp193.component';

describe('Comp193Component', () => {
  let component: Comp193Component;
  let fixture: ComponentFixture<Comp193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
