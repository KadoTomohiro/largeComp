import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp437Component } from './comp437.component';

describe('Comp437Component', () => {
  let component: Comp437Component;
  let fixture: ComponentFixture<Comp437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
