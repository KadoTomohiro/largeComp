import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1506Component } from './comp1506.component';

describe('Comp1506Component', () => {
  let component: Comp1506Component;
  let fixture: ComponentFixture<Comp1506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
