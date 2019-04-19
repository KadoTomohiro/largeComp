import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1501Component } from './comp1501.component';

describe('Comp1501Component', () => {
  let component: Comp1501Component;
  let fixture: ComponentFixture<Comp1501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
