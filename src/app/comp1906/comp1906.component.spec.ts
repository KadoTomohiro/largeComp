import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1906Component } from './comp1906.component';

describe('Comp1906Component', () => {
  let component: Comp1906Component;
  let fixture: ComponentFixture<Comp1906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
