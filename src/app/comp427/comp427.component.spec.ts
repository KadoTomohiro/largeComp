import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp427Component } from './comp427.component';

describe('Comp427Component', () => {
  let component: Comp427Component;
  let fixture: ComponentFixture<Comp427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
