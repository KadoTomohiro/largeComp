import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1261Component } from './comp1261.component';

describe('Comp1261Component', () => {
  let component: Comp1261Component;
  let fixture: ComponentFixture<Comp1261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
