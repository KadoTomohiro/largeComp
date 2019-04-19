import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp292Component } from './comp292.component';

describe('Comp292Component', () => {
  let component: Comp292Component;
  let fixture: ComponentFixture<Comp292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
