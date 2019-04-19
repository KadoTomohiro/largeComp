import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp545Component } from './comp545.component';

describe('Comp545Component', () => {
  let component: Comp545Component;
  let fixture: ComponentFixture<Comp545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
