import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1108Component } from './comp1108.component';

describe('Comp1108Component', () => {
  let component: Comp1108Component;
  let fixture: ComponentFixture<Comp1108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
