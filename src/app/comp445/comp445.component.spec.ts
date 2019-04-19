import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp445Component } from './comp445.component';

describe('Comp445Component', () => {
  let component: Comp445Component;
  let fixture: ComponentFixture<Comp445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
