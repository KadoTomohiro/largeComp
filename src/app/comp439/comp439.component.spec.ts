import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp439Component } from './comp439.component';

describe('Comp439Component', () => {
  let component: Comp439Component;
  let fixture: ComponentFixture<Comp439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
