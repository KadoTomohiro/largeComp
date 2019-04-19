import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp622Component } from './comp622.component';

describe('Comp622Component', () => {
  let component: Comp622Component;
  let fixture: ComponentFixture<Comp622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
