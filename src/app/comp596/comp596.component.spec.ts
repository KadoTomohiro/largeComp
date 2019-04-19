import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp596Component } from './comp596.component';

describe('Comp596Component', () => {
  let component: Comp596Component;
  let fixture: ComponentFixture<Comp596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
