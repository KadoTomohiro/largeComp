import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp902Component } from './comp902.component';

describe('Comp902Component', () => {
  let component: Comp902Component;
  let fixture: ComponentFixture<Comp902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
