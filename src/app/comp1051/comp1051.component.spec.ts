import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1051Component } from './comp1051.component';

describe('Comp1051Component', () => {
  let component: Comp1051Component;
  let fixture: ComponentFixture<Comp1051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
