import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp232Component } from './comp232.component';

describe('Comp232Component', () => {
  let component: Comp232Component;
  let fixture: ComponentFixture<Comp232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
