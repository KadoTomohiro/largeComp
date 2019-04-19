import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1512Component } from './comp1512.component';

describe('Comp1512Component', () => {
  let component: Comp1512Component;
  let fixture: ComponentFixture<Comp1512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
