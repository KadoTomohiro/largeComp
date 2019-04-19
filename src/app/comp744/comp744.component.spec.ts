import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp744Component } from './comp744.component';

describe('Comp744Component', () => {
  let component: Comp744Component;
  let fixture: ComponentFixture<Comp744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
