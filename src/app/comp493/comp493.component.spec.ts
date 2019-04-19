import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp493Component } from './comp493.component';

describe('Comp493Component', () => {
  let component: Comp493Component;
  let fixture: ComponentFixture<Comp493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
