import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1422Component } from './comp1422.component';

describe('Comp1422Component', () => {
  let component: Comp1422Component;
  let fixture: ComponentFixture<Comp1422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
