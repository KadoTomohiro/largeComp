import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp638Component } from './comp638.component';

describe('Comp638Component', () => {
  let component: Comp638Component;
  let fixture: ComponentFixture<Comp638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
