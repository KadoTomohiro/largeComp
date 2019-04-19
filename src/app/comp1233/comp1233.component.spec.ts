import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1233Component } from './comp1233.component';

describe('Comp1233Component', () => {
  let component: Comp1233Component;
  let fixture: ComponentFixture<Comp1233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
