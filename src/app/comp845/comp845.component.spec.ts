import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp845Component } from './comp845.component';

describe('Comp845Component', () => {
  let component: Comp845Component;
  let fixture: ComponentFixture<Comp845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
