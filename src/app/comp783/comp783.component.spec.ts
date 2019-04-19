import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp783Component } from './comp783.component';

describe('Comp783Component', () => {
  let component: Comp783Component;
  let fixture: ComponentFixture<Comp783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
