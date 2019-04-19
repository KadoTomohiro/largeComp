import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp676Component } from './comp676.component';

describe('Comp676Component', () => {
  let component: Comp676Component;
  let fixture: ComponentFixture<Comp676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
