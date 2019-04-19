import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp741Component } from './comp741.component';

describe('Comp741Component', () => {
  let component: Comp741Component;
  let fixture: ComponentFixture<Comp741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
