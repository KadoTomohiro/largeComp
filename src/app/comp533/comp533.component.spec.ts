import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp533Component } from './comp533.component';

describe('Comp533Component', () => {
  let component: Comp533Component;
  let fixture: ComponentFixture<Comp533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
