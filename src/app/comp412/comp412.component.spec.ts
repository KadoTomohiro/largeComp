import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp412Component } from './comp412.component';

describe('Comp412Component', () => {
  let component: Comp412Component;
  let fixture: ComponentFixture<Comp412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
