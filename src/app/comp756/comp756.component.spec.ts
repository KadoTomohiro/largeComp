import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp756Component } from './comp756.component';

describe('Comp756Component', () => {
  let component: Comp756Component;
  let fixture: ComponentFixture<Comp756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
