import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1030Component } from './comp1030.component';

describe('Comp1030Component', () => {
  let component: Comp1030Component;
  let fixture: ComponentFixture<Comp1030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
