import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp127Component } from './comp127.component';

describe('Comp127Component', () => {
  let component: Comp127Component;
  let fixture: ComponentFixture<Comp127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
