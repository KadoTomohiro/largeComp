import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1977Component } from './comp1977.component';

describe('Comp1977Component', () => {
  let component: Comp1977Component;
  let fixture: ComponentFixture<Comp1977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
