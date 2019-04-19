import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp612Component } from './comp612.component';

describe('Comp612Component', () => {
  let component: Comp612Component;
  let fixture: ComponentFixture<Comp612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
