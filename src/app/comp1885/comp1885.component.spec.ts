import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1885Component } from './comp1885.component';

describe('Comp1885Component', () => {
  let component: Comp1885Component;
  let fixture: ComponentFixture<Comp1885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
