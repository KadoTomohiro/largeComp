import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp195Component } from './comp195.component';

describe('Comp195Component', () => {
  let component: Comp195Component;
  let fixture: ComponentFixture<Comp195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
