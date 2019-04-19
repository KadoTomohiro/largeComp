import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1982Component } from './comp1982.component';

describe('Comp1982Component', () => {
  let component: Comp1982Component;
  let fixture: ComponentFixture<Comp1982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
