import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1916Component } from './comp1916.component';

describe('Comp1916Component', () => {
  let component: Comp1916Component;
  let fixture: ComponentFixture<Comp1916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
