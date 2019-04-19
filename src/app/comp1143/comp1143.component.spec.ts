import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1143Component } from './comp1143.component';

describe('Comp1143Component', () => {
  let component: Comp1143Component;
  let fixture: ComponentFixture<Comp1143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
