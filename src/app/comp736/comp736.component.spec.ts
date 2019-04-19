import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp736Component } from './comp736.component';

describe('Comp736Component', () => {
  let component: Comp736Component;
  let fixture: ComponentFixture<Comp736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
