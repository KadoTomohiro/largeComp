import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1495Component } from './comp1495.component';

describe('Comp1495Component', () => {
  let component: Comp1495Component;
  let fixture: ComponentFixture<Comp1495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});