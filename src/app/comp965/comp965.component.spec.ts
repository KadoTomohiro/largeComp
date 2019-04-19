import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp965Component } from './comp965.component';

describe('Comp965Component', () => {
  let component: Comp965Component;
  let fixture: ComponentFixture<Comp965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
