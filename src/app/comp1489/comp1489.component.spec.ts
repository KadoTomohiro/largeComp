import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1489Component } from './comp1489.component';

describe('Comp1489Component', () => {
  let component: Comp1489Component;
  let fixture: ComponentFixture<Comp1489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
