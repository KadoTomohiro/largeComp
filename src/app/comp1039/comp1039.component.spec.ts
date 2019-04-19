import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1039Component } from './comp1039.component';

describe('Comp1039Component', () => {
  let component: Comp1039Component;
  let fixture: ComponentFixture<Comp1039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
