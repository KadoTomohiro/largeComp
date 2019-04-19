import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1936Component } from './comp1936.component';

describe('Comp1936Component', () => {
  let component: Comp1936Component;
  let fixture: ComponentFixture<Comp1936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
