import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp450Component } from './comp450.component';

describe('Comp450Component', () => {
  let component: Comp450Component;
  let fixture: ComponentFixture<Comp450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
