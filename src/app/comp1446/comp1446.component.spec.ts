import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1446Component } from './comp1446.component';

describe('Comp1446Component', () => {
  let component: Comp1446Component;
  let fixture: ComponentFixture<Comp1446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
