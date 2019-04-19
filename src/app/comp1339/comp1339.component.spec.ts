import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1339Component } from './comp1339.component';

describe('Comp1339Component', () => {
  let component: Comp1339Component;
  let fixture: ComponentFixture<Comp1339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
