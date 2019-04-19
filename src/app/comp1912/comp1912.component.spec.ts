import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1912Component } from './comp1912.component';

describe('Comp1912Component', () => {
  let component: Comp1912Component;
  let fixture: ComponentFixture<Comp1912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
