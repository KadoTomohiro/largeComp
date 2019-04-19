import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp282Component } from './comp282.component';

describe('Comp282Component', () => {
  let component: Comp282Component;
  let fixture: ComponentFixture<Comp282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
