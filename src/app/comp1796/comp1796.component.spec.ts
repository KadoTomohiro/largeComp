import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1796Component } from './comp1796.component';

describe('Comp1796Component', () => {
  let component: Comp1796Component;
  let fixture: ComponentFixture<Comp1796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
