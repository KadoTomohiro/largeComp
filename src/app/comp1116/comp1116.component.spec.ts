import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1116Component } from './comp1116.component';

describe('Comp1116Component', () => {
  let component: Comp1116Component;
  let fixture: ComponentFixture<Comp1116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
