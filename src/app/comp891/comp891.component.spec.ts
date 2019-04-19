import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp891Component } from './comp891.component';

describe('Comp891Component', () => {
  let component: Comp891Component;
  let fixture: ComponentFixture<Comp891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
