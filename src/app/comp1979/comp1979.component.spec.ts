import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1979Component } from './comp1979.component';

describe('Comp1979Component', () => {
  let component: Comp1979Component;
  let fixture: ComponentFixture<Comp1979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
