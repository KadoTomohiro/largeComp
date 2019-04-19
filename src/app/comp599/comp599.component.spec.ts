import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp599Component } from './comp599.component';

describe('Comp599Component', () => {
  let component: Comp599Component;
  let fixture: ComponentFixture<Comp599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
