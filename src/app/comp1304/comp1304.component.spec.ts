import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1304Component } from './comp1304.component';

describe('Comp1304Component', () => {
  let component: Comp1304Component;
  let fixture: ComponentFixture<Comp1304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
