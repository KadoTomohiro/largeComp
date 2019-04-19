import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp655Component } from './comp655.component';

describe('Comp655Component', () => {
  let component: Comp655Component;
  let fixture: ComponentFixture<Comp655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
