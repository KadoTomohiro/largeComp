import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp137Component } from './comp137.component';

describe('Comp137Component', () => {
  let component: Comp137Component;
  let fixture: ComponentFixture<Comp137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
