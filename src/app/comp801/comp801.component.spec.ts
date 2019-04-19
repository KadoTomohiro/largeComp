import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp801Component } from './comp801.component';

describe('Comp801Component', () => {
  let component: Comp801Component;
  let fixture: ComponentFixture<Comp801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
