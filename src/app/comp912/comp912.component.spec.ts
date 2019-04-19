import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp912Component } from './comp912.component';

describe('Comp912Component', () => {
  let component: Comp912Component;
  let fixture: ComponentFixture<Comp912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
