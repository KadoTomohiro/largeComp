import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp752Component } from './comp752.component';

describe('Comp752Component', () => {
  let component: Comp752Component;
  let fixture: ComponentFixture<Comp752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
