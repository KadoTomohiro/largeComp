import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp939Component } from './comp939.component';

describe('Comp939Component', () => {
  let component: Comp939Component;
  let fixture: ComponentFixture<Comp939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
