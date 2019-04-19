import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp325Component } from './comp325.component';

describe('Comp325Component', () => {
  let component: Comp325Component;
  let fixture: ComponentFixture<Comp325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
