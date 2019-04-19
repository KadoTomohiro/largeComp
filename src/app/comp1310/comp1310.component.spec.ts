import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1310Component } from './comp1310.component';

describe('Comp1310Component', () => {
  let component: Comp1310Component;
  let fixture: ComponentFixture<Comp1310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
