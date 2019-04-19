import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp969Component } from './comp969.component';

describe('Comp969Component', () => {
  let component: Comp969Component;
  let fixture: ComponentFixture<Comp969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
