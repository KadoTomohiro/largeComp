import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1403Component } from './comp1403.component';

describe('Comp1403Component', () => {
  let component: Comp1403Component;
  let fixture: ComponentFixture<Comp1403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
