import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp680Component } from './comp680.component';

describe('Comp680Component', () => {
  let component: Comp680Component;
  let fixture: ComponentFixture<Comp680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
