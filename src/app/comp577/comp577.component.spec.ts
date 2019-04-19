import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp577Component } from './comp577.component';

describe('Comp577Component', () => {
  let component: Comp577Component;
  let fixture: ComponentFixture<Comp577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
