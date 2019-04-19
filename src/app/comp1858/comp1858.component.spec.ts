import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1858Component } from './comp1858.component';

describe('Comp1858Component', () => {
  let component: Comp1858Component;
  let fixture: ComponentFixture<Comp1858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
