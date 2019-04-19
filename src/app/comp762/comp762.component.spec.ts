import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp762Component } from './comp762.component';

describe('Comp762Component', () => {
  let component: Comp762Component;
  let fixture: ComponentFixture<Comp762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
