import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp356Component } from './comp356.component';

describe('Comp356Component', () => {
  let component: Comp356Component;
  let fixture: ComponentFixture<Comp356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
