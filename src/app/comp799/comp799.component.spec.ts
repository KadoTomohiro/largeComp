import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp799Component } from './comp799.component';

describe('Comp799Component', () => {
  let component: Comp799Component;
  let fixture: ComponentFixture<Comp799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
