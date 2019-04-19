import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1068Component } from './comp1068.component';

describe('Comp1068Component', () => {
  let component: Comp1068Component;
  let fixture: ComponentFixture<Comp1068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
