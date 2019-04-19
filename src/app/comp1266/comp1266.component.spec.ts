import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1266Component } from './comp1266.component';

describe('Comp1266Component', () => {
  let component: Comp1266Component;
  let fixture: ComponentFixture<Comp1266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
