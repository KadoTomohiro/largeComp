import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp947Component } from './comp947.component';

describe('Comp947Component', () => {
  let component: Comp947Component;
  let fixture: ComponentFixture<Comp947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
