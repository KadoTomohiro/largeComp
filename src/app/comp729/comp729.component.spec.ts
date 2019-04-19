import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp729Component } from './comp729.component';

describe('Comp729Component', () => {
  let component: Comp729Component;
  let fixture: ComponentFixture<Comp729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
