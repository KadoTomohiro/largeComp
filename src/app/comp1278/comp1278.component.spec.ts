import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1278Component } from './comp1278.component';

describe('Comp1278Component', () => {
  let component: Comp1278Component;
  let fixture: ComponentFixture<Comp1278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
