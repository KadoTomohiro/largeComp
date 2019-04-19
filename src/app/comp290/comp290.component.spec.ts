import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp290Component } from './comp290.component';

describe('Comp290Component', () => {
  let component: Comp290Component;
  let fixture: ComponentFixture<Comp290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
