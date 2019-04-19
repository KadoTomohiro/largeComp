import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp198Component } from './comp198.component';

describe('Comp198Component', () => {
  let component: Comp198Component;
  let fixture: ComponentFixture<Comp198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
