import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1096Component } from './comp1096.component';

describe('Comp1096Component', () => {
  let component: Comp1096Component;
  let fixture: ComponentFixture<Comp1096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
