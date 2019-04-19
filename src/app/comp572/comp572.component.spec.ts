import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp572Component } from './comp572.component';

describe('Comp572Component', () => {
  let component: Comp572Component;
  let fixture: ComponentFixture<Comp572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
