import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1727Component } from './comp1727.component';

describe('Comp1727Component', () => {
  let component: Comp1727Component;
  let fixture: ComponentFixture<Comp1727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
