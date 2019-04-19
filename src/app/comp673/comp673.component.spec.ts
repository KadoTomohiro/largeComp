import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp673Component } from './comp673.component';

describe('Comp673Component', () => {
  let component: Comp673Component;
  let fixture: ComponentFixture<Comp673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
