import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1415Component } from './comp1415.component';

describe('Comp1415Component', () => {
  let component: Comp1415Component;
  let fixture: ComponentFixture<Comp1415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
