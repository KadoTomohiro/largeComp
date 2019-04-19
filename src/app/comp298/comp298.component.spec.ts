import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp298Component } from './comp298.component';

describe('Comp298Component', () => {
  let component: Comp298Component;
  let fixture: ComponentFixture<Comp298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
