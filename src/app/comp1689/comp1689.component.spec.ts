import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1689Component } from './comp1689.component';

describe('Comp1689Component', () => {
  let component: Comp1689Component;
  let fixture: ComponentFixture<Comp1689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
