import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1838Component } from './comp1838.component';

describe('Comp1838Component', () => {
  let component: Comp1838Component;
  let fixture: ComponentFixture<Comp1838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
