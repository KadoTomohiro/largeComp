import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp987Component } from './comp987.component';

describe('Comp987Component', () => {
  let component: Comp987Component;
  let fixture: ComponentFixture<Comp987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
