import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1390Component } from './comp1390.component';

describe('Comp1390Component', () => {
  let component: Comp1390Component;
  let fixture: ComponentFixture<Comp1390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
