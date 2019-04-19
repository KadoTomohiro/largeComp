import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1251Component } from './comp1251.component';

describe('Comp1251Component', () => {
  let component: Comp1251Component;
  let fixture: ComponentFixture<Comp1251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
