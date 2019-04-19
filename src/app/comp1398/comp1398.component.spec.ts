import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1398Component } from './comp1398.component';

describe('Comp1398Component', () => {
  let component: Comp1398Component;
  let fixture: ComponentFixture<Comp1398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
