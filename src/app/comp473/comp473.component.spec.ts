import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp473Component } from './comp473.component';

describe('Comp473Component', () => {
  let component: Comp473Component;
  let fixture: ComponentFixture<Comp473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
