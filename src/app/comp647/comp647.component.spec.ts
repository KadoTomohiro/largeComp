import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp647Component } from './comp647.component';

describe('Comp647Component', () => {
  let component: Comp647Component;
  let fixture: ComponentFixture<Comp647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
