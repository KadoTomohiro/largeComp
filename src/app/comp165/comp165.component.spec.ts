import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp165Component } from './comp165.component';

describe('Comp165Component', () => {
  let component: Comp165Component;
  let fixture: ComponentFixture<Comp165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
