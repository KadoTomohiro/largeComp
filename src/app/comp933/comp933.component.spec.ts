import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp933Component } from './comp933.component';

describe('Comp933Component', () => {
  let component: Comp933Component;
  let fixture: ComponentFixture<Comp933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
