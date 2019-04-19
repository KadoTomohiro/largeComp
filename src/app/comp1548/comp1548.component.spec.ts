import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1548Component } from './comp1548.component';

describe('Comp1548Component', () => {
  let component: Comp1548Component;
  let fixture: ComponentFixture<Comp1548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
