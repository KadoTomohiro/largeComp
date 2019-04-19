import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp471Component } from './comp471.component';

describe('Comp471Component', () => {
  let component: Comp471Component;
  let fixture: ComponentFixture<Comp471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
