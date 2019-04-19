import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp431Component } from './comp431.component';

describe('Comp431Component', () => {
  let component: Comp431Component;
  let fixture: ComponentFixture<Comp431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
