import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1293Component } from './comp1293.component';

describe('Comp1293Component', () => {
  let component: Comp1293Component;
  let fixture: ComponentFixture<Comp1293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
