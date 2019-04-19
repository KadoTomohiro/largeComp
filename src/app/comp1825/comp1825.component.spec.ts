import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1825Component } from './comp1825.component';

describe('Comp1825Component', () => {
  let component: Comp1825Component;
  let fixture: ComponentFixture<Comp1825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
