import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1149Component } from './comp1149.component';

describe('Comp1149Component', () => {
  let component: Comp1149Component;
  let fixture: ComponentFixture<Comp1149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
