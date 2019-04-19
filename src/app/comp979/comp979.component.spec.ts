import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp979Component } from './comp979.component';

describe('Comp979Component', () => {
  let component: Comp979Component;
  let fixture: ComponentFixture<Comp979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
