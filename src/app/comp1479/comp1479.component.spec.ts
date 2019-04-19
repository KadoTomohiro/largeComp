import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1479Component } from './comp1479.component';

describe('Comp1479Component', () => {
  let component: Comp1479Component;
  let fixture: ComponentFixture<Comp1479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
