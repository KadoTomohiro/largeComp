import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp147Component } from './comp147.component';

describe('Comp147Component', () => {
  let component: Comp147Component;
  let fixture: ComponentFixture<Comp147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
