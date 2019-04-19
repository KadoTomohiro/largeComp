import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1370Component } from './comp1370.component';

describe('Comp1370Component', () => {
  let component: Comp1370Component;
  let fixture: ComponentFixture<Comp1370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
