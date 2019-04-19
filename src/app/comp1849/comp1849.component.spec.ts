import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1849Component } from './comp1849.component';

describe('Comp1849Component', () => {
  let component: Comp1849Component;
  let fixture: ComponentFixture<Comp1849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
