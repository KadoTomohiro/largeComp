import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp662Component } from './comp662.component';

describe('Comp662Component', () => {
  let component: Comp662Component;
  let fixture: ComponentFixture<Comp662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
