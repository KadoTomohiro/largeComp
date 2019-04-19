import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp368Component } from './comp368.component';

describe('Comp368Component', () => {
  let component: Comp368Component;
  let fixture: ComponentFixture<Comp368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
