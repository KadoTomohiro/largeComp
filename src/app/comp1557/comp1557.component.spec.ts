import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1557Component } from './comp1557.component';

describe('Comp1557Component', () => {
  let component: Comp1557Component;
  let fixture: ComponentFixture<Comp1557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
