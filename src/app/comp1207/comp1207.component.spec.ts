import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1207Component } from './comp1207.component';

describe('Comp1207Component', () => {
  let component: Comp1207Component;
  let fixture: ComponentFixture<Comp1207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
