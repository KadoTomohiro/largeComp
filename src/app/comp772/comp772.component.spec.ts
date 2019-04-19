import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp772Component } from './comp772.component';

describe('Comp772Component', () => {
  let component: Comp772Component;
  let fixture: ComponentFixture<Comp772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
