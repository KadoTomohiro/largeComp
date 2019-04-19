import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp791Component } from './comp791.component';

describe('Comp791Component', () => {
  let component: Comp791Component;
  let fixture: ComponentFixture<Comp791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
