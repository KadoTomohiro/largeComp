import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp146Component } from './comp146.component';

describe('Comp146Component', () => {
  let component: Comp146Component;
  let fixture: ComponentFixture<Comp146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
