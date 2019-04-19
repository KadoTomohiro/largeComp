import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp749Component } from './comp749.component';

describe('Comp749Component', () => {
  let component: Comp749Component;
  let fixture: ComponentFixture<Comp749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
