import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp243Component } from './comp243.component';

describe('Comp243Component', () => {
  let component: Comp243Component;
  let fixture: ComponentFixture<Comp243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
