import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1455Component } from './comp1455.component';

describe('Comp1455Component', () => {
  let component: Comp1455Component;
  let fixture: ComponentFixture<Comp1455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
