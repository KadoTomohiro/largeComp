import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1747Component } from './comp1747.component';

describe('Comp1747Component', () => {
  let component: Comp1747Component;
  let fixture: ComponentFixture<Comp1747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
