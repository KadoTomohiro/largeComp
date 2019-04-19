import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1114Component } from './comp1114.component';

describe('Comp1114Component', () => {
  let component: Comp1114Component;
  let fixture: ComponentFixture<Comp1114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
