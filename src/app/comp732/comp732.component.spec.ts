import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp732Component } from './comp732.component';

describe('Comp732Component', () => {
  let component: Comp732Component;
  let fixture: ComponentFixture<Comp732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
