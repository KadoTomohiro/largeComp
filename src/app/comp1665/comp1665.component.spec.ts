import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1665Component } from './comp1665.component';

describe('Comp1665Component', () => {
  let component: Comp1665Component;
  let fixture: ComponentFixture<Comp1665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
