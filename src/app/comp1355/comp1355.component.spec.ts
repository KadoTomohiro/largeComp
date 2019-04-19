import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1355Component } from './comp1355.component';

describe('Comp1355Component', () => {
  let component: Comp1355Component;
  let fixture: ComponentFixture<Comp1355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
