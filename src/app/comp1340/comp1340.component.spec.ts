import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1340Component } from './comp1340.component';

describe('Comp1340Component', () => {
  let component: Comp1340Component;
  let fixture: ComponentFixture<Comp1340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
