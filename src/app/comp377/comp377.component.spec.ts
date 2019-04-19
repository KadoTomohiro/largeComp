import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp377Component } from './comp377.component';

describe('Comp377Component', () => {
  let component: Comp377Component;
  let fixture: ComponentFixture<Comp377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
