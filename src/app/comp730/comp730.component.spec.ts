import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp730Component } from './comp730.component';

describe('Comp730Component', () => {
  let component: Comp730Component;
  let fixture: ComponentFixture<Comp730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
