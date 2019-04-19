import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp328Component } from './comp328.component';

describe('Comp328Component', () => {
  let component: Comp328Component;
  let fixture: ComponentFixture<Comp328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
