import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1297Component } from './comp1297.component';

describe('Comp1297Component', () => {
  let component: Comp1297Component;
  let fixture: ComponentFixture<Comp1297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
