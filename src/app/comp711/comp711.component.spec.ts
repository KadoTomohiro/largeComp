import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp711Component } from './comp711.component';

describe('Comp711Component', () => {
  let component: Comp711Component;
  let fixture: ComponentFixture<Comp711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
