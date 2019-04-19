import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp566Component } from './comp566.component';

describe('Comp566Component', () => {
  let component: Comp566Component;
  let fixture: ComponentFixture<Comp566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
