import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp185Component } from './comp185.component';

describe('Comp185Component', () => {
  let component: Comp185Component;
  let fixture: ComponentFixture<Comp185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
