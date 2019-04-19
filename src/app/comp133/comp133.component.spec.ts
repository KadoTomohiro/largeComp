import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp133Component } from './comp133.component';

describe('Comp133Component', () => {
  let component: Comp133Component;
  let fixture: ComponentFixture<Comp133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
