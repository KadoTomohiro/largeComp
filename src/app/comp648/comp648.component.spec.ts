import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp648Component } from './comp648.component';

describe('Comp648Component', () => {
  let component: Comp648Component;
  let fixture: ComponentFixture<Comp648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
