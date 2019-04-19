import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp993Component } from './comp993.component';

describe('Comp993Component', () => {
  let component: Comp993Component;
  let fixture: ComponentFixture<Comp993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
