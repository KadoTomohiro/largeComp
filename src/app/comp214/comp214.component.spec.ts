import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp214Component } from './comp214.component';

describe('Comp214Component', () => {
  let component: Comp214Component;
  let fixture: ComponentFixture<Comp214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
