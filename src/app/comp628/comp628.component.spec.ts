import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp628Component } from './comp628.component';

describe('Comp628Component', () => {
  let component: Comp628Component;
  let fixture: ComponentFixture<Comp628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
