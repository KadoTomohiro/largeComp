import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp428Component } from './comp428.component';

describe('Comp428Component', () => {
  let component: Comp428Component;
  let fixture: ComponentFixture<Comp428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
