import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp242Component } from './comp242.component';

describe('Comp242Component', () => {
  let component: Comp242Component;
  let fixture: ComponentFixture<Comp242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
