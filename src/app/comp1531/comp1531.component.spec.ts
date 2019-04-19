import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1531Component } from './comp1531.component';

describe('Comp1531Component', () => {
  let component: Comp1531Component;
  let fixture: ComponentFixture<Comp1531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
