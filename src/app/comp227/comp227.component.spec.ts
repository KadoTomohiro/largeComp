import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp227Component } from './comp227.component';

describe('Comp227Component', () => {
  let component: Comp227Component;
  let fixture: ComponentFixture<Comp227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
