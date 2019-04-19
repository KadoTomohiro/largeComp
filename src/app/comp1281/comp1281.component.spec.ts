import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1281Component } from './comp1281.component';

describe('Comp1281Component', () => {
  let component: Comp1281Component;
  let fixture: ComponentFixture<Comp1281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
