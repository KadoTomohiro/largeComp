import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp779Component } from './comp779.component';

describe('Comp779Component', () => {
  let component: Comp779Component;
  let fixture: ComponentFixture<Comp779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
