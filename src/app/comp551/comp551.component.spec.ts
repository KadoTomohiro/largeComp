import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp551Component } from './comp551.component';

describe('Comp551Component', () => {
  let component: Comp551Component;
  let fixture: ComponentFixture<Comp551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
