import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1692Component } from './comp1692.component';

describe('Comp1692Component', () => {
  let component: Comp1692Component;
  let fixture: ComponentFixture<Comp1692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
