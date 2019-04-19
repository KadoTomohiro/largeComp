import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1162Component } from './comp1162.component';

describe('Comp1162Component', () => {
  let component: Comp1162Component;
  let fixture: ComponentFixture<Comp1162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
