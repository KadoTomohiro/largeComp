import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1516Component } from './comp1516.component';

describe('Comp1516Component', () => {
  let component: Comp1516Component;
  let fixture: ComponentFixture<Comp1516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
