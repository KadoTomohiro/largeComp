import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp998Component } from './comp998.component';

describe('Comp998Component', () => {
  let component: Comp998Component;
  let fixture: ComponentFixture<Comp998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
