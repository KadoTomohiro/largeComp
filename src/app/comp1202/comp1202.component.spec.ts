import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1202Component } from './comp1202.component';

describe('Comp1202Component', () => {
  let component: Comp1202Component;
  let fixture: ComponentFixture<Comp1202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
