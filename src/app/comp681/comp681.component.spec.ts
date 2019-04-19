import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp681Component } from './comp681.component';

describe('Comp681Component', () => {
  let component: Comp681Component;
  let fixture: ComponentFixture<Comp681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
