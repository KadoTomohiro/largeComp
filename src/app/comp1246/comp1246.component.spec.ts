import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1246Component } from './comp1246.component';

describe('Comp1246Component', () => {
  let component: Comp1246Component;
  let fixture: ComponentFixture<Comp1246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
