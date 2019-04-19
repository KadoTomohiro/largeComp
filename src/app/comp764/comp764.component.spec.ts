import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp764Component } from './comp764.component';

describe('Comp764Component', () => {
  let component: Comp764Component;
  let fixture: ComponentFixture<Comp764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
