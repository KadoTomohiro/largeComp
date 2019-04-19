import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp930Component } from './comp930.component';

describe('Comp930Component', () => {
  let component: Comp930Component;
  let fixture: ComponentFixture<Comp930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
