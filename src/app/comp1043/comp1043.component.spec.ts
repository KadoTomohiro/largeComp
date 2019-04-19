import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1043Component } from './comp1043.component';

describe('Comp1043Component', () => {
  let component: Comp1043Component;
  let fixture: ComponentFixture<Comp1043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
