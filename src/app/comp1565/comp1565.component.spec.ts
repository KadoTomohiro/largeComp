import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1565Component } from './comp1565.component';

describe('Comp1565Component', () => {
  let component: Comp1565Component;
  let fixture: ComponentFixture<Comp1565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
