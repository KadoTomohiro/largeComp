import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp807Component } from './comp807.component';

describe('Comp807Component', () => {
  let component: Comp807Component;
  let fixture: ComponentFixture<Comp807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
