import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1328Component } from './comp1328.component';

describe('Comp1328Component', () => {
  let component: Comp1328Component;
  let fixture: ComponentFixture<Comp1328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
