import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp600Component } from './comp600.component';

describe('Comp600Component', () => {
  let component: Comp600Component;
  let fixture: ComponentFixture<Comp600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
