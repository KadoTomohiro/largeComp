import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1932Component } from './comp1932.component';

describe('Comp1932Component', () => {
  let component: Comp1932Component;
  let fixture: ComponentFixture<Comp1932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
