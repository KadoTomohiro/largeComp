import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp217Component } from './comp217.component';

describe('Comp217Component', () => {
  let component: Comp217Component;
  let fixture: ComponentFixture<Comp217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
