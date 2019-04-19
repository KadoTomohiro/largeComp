import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp525Component } from './comp525.component';

describe('Comp525Component', () => {
  let component: Comp525Component;
  let fixture: ComponentFixture<Comp525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
