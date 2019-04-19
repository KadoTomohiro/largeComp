import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp553Component } from './comp553.component';

describe('Comp553Component', () => {
  let component: Comp553Component;
  let fixture: ComponentFixture<Comp553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
