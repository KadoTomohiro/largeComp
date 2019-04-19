import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp957Component } from './comp957.component';

describe('Comp957Component', () => {
  let component: Comp957Component;
  let fixture: ComponentFixture<Comp957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
