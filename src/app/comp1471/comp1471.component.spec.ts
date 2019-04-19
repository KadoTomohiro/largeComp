import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1471Component } from './comp1471.component';

describe('Comp1471Component', () => {
  let component: Comp1471Component;
  let fixture: ComponentFixture<Comp1471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
