import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp485Component } from './comp485.component';

describe('Comp485Component', () => {
  let component: Comp485Component;
  let fixture: ComponentFixture<Comp485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
