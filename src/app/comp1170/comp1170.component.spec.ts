import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1170Component } from './comp1170.component';

describe('Comp1170Component', () => {
  let component: Comp1170Component;
  let fixture: ComponentFixture<Comp1170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
