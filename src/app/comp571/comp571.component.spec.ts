import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp571Component } from './comp571.component';

describe('Comp571Component', () => {
  let component: Comp571Component;
  let fixture: ComponentFixture<Comp571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
