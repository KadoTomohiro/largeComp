import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1547Component } from './comp1547.component';

describe('Comp1547Component', () => {
  let component: Comp1547Component;
  let fixture: ComponentFixture<Comp1547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
