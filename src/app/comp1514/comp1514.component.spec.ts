import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1514Component } from './comp1514.component';

describe('Comp1514Component', () => {
  let component: Comp1514Component;
  let fixture: ComponentFixture<Comp1514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
