import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1055Component } from './comp1055.component';

describe('Comp1055Component', () => {
  let component: Comp1055Component;
  let fixture: ComponentFixture<Comp1055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
