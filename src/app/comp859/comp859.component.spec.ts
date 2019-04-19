import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp859Component } from './comp859.component';

describe('Comp859Component', () => {
  let component: Comp859Component;
  let fixture: ComponentFixture<Comp859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
