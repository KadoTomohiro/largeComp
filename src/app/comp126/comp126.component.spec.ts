import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp126Component } from './comp126.component';

describe('Comp126Component', () => {
  let component: Comp126Component;
  let fixture: ComponentFixture<Comp126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
