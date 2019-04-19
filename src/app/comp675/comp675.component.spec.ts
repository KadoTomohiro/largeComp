import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp675Component } from './comp675.component';

describe('Comp675Component', () => {
  let component: Comp675Component;
  let fixture: ComponentFixture<Comp675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
