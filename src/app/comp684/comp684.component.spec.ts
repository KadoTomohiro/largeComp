import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp684Component } from './comp684.component';

describe('Comp684Component', () => {
  let component: Comp684Component;
  let fixture: ComponentFixture<Comp684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
