import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1102Component } from './comp1102.component';

describe('Comp1102Component', () => {
  let component: Comp1102Component;
  let fixture: ComponentFixture<Comp1102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
