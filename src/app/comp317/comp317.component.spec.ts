import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp317Component } from './comp317.component';

describe('Comp317Component', () => {
  let component: Comp317Component;
  let fixture: ComponentFixture<Comp317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
