import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp873Component } from './comp873.component';

describe('Comp873Component', () => {
  let component: Comp873Component;
  let fixture: ComponentFixture<Comp873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
