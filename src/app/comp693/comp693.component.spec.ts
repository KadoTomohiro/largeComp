import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp693Component } from './comp693.component';

describe('Comp693Component', () => {
  let component: Comp693Component;
  let fixture: ComponentFixture<Comp693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
