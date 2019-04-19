import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp355Component } from './comp355.component';

describe('Comp355Component', () => {
  let component: Comp355Component;
  let fixture: ComponentFixture<Comp355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
