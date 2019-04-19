import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1981Component } from './comp1981.component';

describe('Comp1981Component', () => {
  let component: Comp1981Component;
  let fixture: ComponentFixture<Comp1981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
