import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1107Component } from './comp1107.component';

describe('Comp1107Component', () => {
  let component: Comp1107Component;
  let fixture: ComponentFixture<Comp1107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
