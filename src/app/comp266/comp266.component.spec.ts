import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp266Component } from './comp266.component';

describe('Comp266Component', () => {
  let component: Comp266Component;
  let fixture: ComponentFixture<Comp266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
