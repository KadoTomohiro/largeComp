import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp992Component } from './comp992.component';

describe('Comp992Component', () => {
  let component: Comp992Component;
  let fixture: ComponentFixture<Comp992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
