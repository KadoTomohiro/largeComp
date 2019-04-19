import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1923Component } from './comp1923.component';

describe('Comp1923Component', () => {
  let component: Comp1923Component;
  let fixture: ComponentFixture<Comp1923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
