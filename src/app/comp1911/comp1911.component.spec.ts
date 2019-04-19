import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1911Component } from './comp1911.component';

describe('Comp1911Component', () => {
  let component: Comp1911Component;
  let fixture: ComponentFixture<Comp1911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
