import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1603Component } from './comp1603.component';

describe('Comp1603Component', () => {
  let component: Comp1603Component;
  let fixture: ComponentFixture<Comp1603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
