import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp968Component } from './comp968.component';

describe('Comp968Component', () => {
  let component: Comp968Component;
  let fixture: ComponentFixture<Comp968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
