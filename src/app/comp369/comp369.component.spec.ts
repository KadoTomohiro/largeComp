import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp369Component } from './comp369.component';

describe('Comp369Component', () => {
  let component: Comp369Component;
  let fixture: ComponentFixture<Comp369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
