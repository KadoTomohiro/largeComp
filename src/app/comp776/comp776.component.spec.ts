import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp776Component } from './comp776.component';

describe('Comp776Component', () => {
  let component: Comp776Component;
  let fixture: ComponentFixture<Comp776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
