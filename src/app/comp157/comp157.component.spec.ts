import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp157Component } from './comp157.component';

describe('Comp157Component', () => {
  let component: Comp157Component;
  let fixture: ComponentFixture<Comp157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
