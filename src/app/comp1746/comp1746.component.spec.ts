import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1746Component } from './comp1746.component';

describe('Comp1746Component', () => {
  let component: Comp1746Component;
  let fixture: ComponentFixture<Comp1746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
