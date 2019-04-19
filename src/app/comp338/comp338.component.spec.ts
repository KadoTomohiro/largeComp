import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp338Component } from './comp338.component';

describe('Comp338Component', () => {
  let component: Comp338Component;
  let fixture: ComponentFixture<Comp338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
