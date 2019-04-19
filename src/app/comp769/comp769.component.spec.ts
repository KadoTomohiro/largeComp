import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp769Component } from './comp769.component';

describe('Comp769Component', () => {
  let component: Comp769Component;
  let fixture: ComponentFixture<Comp769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
