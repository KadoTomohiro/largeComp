import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp781Component } from './comp781.component';

describe('Comp781Component', () => {
  let component: Comp781Component;
  let fixture: ComponentFixture<Comp781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
