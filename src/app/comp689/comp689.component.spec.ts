import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp689Component } from './comp689.component';

describe('Comp689Component', () => {
  let component: Comp689Component;
  let fixture: ComponentFixture<Comp689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
