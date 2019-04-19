import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp699Component } from './comp699.component';

describe('Comp699Component', () => {
  let component: Comp699Component;
  let fixture: ComponentFixture<Comp699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
