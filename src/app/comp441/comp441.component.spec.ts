import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp441Component } from './comp441.component';

describe('Comp441Component', () => {
  let component: Comp441Component;
  let fixture: ComponentFixture<Comp441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
