import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp635Component } from './comp635.component';

describe('Comp635Component', () => {
  let component: Comp635Component;
  let fixture: ComponentFixture<Comp635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
