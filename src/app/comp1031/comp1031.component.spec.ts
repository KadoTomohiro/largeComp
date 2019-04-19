import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1031Component } from './comp1031.component';

describe('Comp1031Component', () => {
  let component: Comp1031Component;
  let fixture: ComponentFixture<Comp1031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
