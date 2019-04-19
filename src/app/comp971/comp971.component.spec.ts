import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp971Component } from './comp971.component';

describe('Comp971Component', () => {
  let component: Comp971Component;
  let fixture: ComponentFixture<Comp971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
