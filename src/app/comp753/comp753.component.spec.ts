import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp753Component } from './comp753.component';

describe('Comp753Component', () => {
  let component: Comp753Component;
  let fixture: ComponentFixture<Comp753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
