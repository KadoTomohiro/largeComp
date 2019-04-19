import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp453Component } from './comp453.component';

describe('Comp453Component', () => {
  let component: Comp453Component;
  let fixture: ComponentFixture<Comp453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
