import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp871Component } from './comp871.component';

describe('Comp871Component', () => {
  let component: Comp871Component;
  let fixture: ComponentFixture<Comp871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
