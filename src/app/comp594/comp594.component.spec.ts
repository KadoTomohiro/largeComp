import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp594Component } from './comp594.component';

describe('Comp594Component', () => {
  let component: Comp594Component;
  let fixture: ComponentFixture<Comp594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
