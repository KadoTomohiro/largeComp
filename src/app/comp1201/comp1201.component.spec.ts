import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1201Component } from './comp1201.component';

describe('Comp1201Component', () => {
  let component: Comp1201Component;
  let fixture: ComponentFixture<Comp1201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
