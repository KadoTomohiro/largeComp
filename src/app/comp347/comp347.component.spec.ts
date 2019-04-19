import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp347Component } from './comp347.component';

describe('Comp347Component', () => {
  let component: Comp347Component;
  let fixture: ComponentFixture<Comp347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
