import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp905Component } from './comp905.component';

describe('Comp905Component', () => {
  let component: Comp905Component;
  let fixture: ComponentFixture<Comp905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
