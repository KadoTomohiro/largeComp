import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp521Component } from './comp521.component';

describe('Comp521Component', () => {
  let component: Comp521Component;
  let fixture: ComponentFixture<Comp521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
