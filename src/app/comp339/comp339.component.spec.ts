import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp339Component } from './comp339.component';

describe('Comp339Component', () => {
  let component: Comp339Component;
  let fixture: ComponentFixture<Comp339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
