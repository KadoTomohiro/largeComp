import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp235Component } from './comp235.component';

describe('Comp235Component', () => {
  let component: Comp235Component;
  let fixture: ComponentFixture<Comp235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
