import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp456Component } from './comp456.component';

describe('Comp456Component', () => {
  let component: Comp456Component;
  let fixture: ComponentFixture<Comp456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
