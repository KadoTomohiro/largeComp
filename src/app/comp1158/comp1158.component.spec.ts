import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1158Component } from './comp1158.component';

describe('Comp1158Component', () => {
  let component: Comp1158Component;
  let fixture: ComponentFixture<Comp1158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
