import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1853Component } from './comp1853.component';

describe('Comp1853Component', () => {
  let component: Comp1853Component;
  let fixture: ComponentFixture<Comp1853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
