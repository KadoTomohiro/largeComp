import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1318Component } from './comp1318.component';

describe('Comp1318Component', () => {
  let component: Comp1318Component;
  let fixture: ComponentFixture<Comp1318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
