import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1331Component } from './comp1331.component';

describe('Comp1331Component', () => {
  let component: Comp1331Component;
  let fixture: ComponentFixture<Comp1331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
