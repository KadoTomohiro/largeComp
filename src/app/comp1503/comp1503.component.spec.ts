import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1503Component } from './comp1503.component';

describe('Comp1503Component', () => {
  let component: Comp1503Component;
  let fixture: ComponentFixture<Comp1503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
