import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1846Component } from './comp1846.component';

describe('Comp1846Component', () => {
  let component: Comp1846Component;
  let fixture: ComponentFixture<Comp1846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
