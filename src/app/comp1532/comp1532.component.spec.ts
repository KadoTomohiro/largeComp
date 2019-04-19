import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1532Component } from './comp1532.component';

describe('Comp1532Component', () => {
  let component: Comp1532Component;
  let fixture: ComponentFixture<Comp1532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
