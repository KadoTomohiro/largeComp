import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp476Component } from './comp476.component';

describe('Comp476Component', () => {
  let component: Comp476Component;
  let fixture: ComponentFixture<Comp476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
