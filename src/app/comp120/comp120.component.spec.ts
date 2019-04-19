import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp120Component } from './comp120.component';

describe('Comp120Component', () => {
  let component: Comp120Component;
  let fixture: ComponentFixture<Comp120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
