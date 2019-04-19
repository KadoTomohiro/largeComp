import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp722Component } from './comp722.component';

describe('Comp722Component', () => {
  let component: Comp722Component;
  let fixture: ComponentFixture<Comp722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
