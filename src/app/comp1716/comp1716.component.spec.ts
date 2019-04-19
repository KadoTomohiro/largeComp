import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1716Component } from './comp1716.component';

describe('Comp1716Component', () => {
  let component: Comp1716Component;
  let fixture: ComponentFixture<Comp1716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
