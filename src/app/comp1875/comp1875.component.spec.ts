import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1875Component } from './comp1875.component';

describe('Comp1875Component', () => {
  let component: Comp1875Component;
  let fixture: ComponentFixture<Comp1875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
