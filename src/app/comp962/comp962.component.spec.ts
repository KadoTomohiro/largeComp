import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp962Component } from './comp962.component';

describe('Comp962Component', () => {
  let component: Comp962Component;
  let fixture: ComponentFixture<Comp962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
