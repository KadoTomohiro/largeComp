import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1445Component } from './comp1445.component';

describe('Comp1445Component', () => {
  let component: Comp1445Component;
  let fixture: ComponentFixture<Comp1445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
