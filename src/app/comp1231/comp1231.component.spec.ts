import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1231Component } from './comp1231.component';

describe('Comp1231Component', () => {
  let component: Comp1231Component;
  let fixture: ComponentFixture<Comp1231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
