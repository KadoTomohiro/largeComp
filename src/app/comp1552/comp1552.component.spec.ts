import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1552Component } from './comp1552.component';

describe('Comp1552Component', () => {
  let component: Comp1552Component;
  let fixture: ComponentFixture<Comp1552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
