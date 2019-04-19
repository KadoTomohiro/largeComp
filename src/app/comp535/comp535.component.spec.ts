import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp535Component } from './comp535.component';

describe('Comp535Component', () => {
  let component: Comp535Component;
  let fixture: ComponentFixture<Comp535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
