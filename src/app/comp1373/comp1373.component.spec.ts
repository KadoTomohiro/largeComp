import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1373Component } from './comp1373.component';

describe('Comp1373Component', () => {
  let component: Comp1373Component;
  let fixture: ComponentFixture<Comp1373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
