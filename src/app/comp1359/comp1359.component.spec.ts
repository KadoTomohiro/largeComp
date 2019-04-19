import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1359Component } from './comp1359.component';

describe('Comp1359Component', () => {
  let component: Comp1359Component;
  let fixture: ComponentFixture<Comp1359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
