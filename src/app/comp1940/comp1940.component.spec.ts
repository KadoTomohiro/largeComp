import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1940Component } from './comp1940.component';

describe('Comp1940Component', () => {
  let component: Comp1940Component;
  let fixture: ComponentFixture<Comp1940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
