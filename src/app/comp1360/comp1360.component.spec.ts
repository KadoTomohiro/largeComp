import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1360Component } from './comp1360.component';

describe('Comp1360Component', () => {
  let component: Comp1360Component;
  let fixture: ComponentFixture<Comp1360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
