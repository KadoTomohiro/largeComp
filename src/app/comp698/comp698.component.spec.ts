import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp698Component } from './comp698.component';

describe('Comp698Component', () => {
  let component: Comp698Component;
  let fixture: ComponentFixture<Comp698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
