import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp315Component } from './comp315.component';

describe('Comp315Component', () => {
  let component: Comp315Component;
  let fixture: ComponentFixture<Comp315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
