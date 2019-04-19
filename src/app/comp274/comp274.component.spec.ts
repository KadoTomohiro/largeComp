import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp274Component } from './comp274.component';

describe('Comp274Component', () => {
  let component: Comp274Component;
  let fixture: ComponentFixture<Comp274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
