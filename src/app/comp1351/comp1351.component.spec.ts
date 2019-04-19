import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1351Component } from './comp1351.component';

describe('Comp1351Component', () => {
  let component: Comp1351Component;
  let fixture: ComponentFixture<Comp1351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
