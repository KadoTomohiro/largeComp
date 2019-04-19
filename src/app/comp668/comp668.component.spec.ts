import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp668Component } from './comp668.component';

describe('Comp668Component', () => {
  let component: Comp668Component;
  let fixture: ComponentFixture<Comp668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
