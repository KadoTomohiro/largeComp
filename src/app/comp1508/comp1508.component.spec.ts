import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1508Component } from './comp1508.component';

describe('Comp1508Component', () => {
  let component: Comp1508Component;
  let fixture: ComponentFixture<Comp1508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
