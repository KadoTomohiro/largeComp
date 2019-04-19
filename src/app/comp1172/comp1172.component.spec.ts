import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1172Component } from './comp1172.component';

describe('Comp1172Component', () => {
  let component: Comp1172Component;
  let fixture: ComponentFixture<Comp1172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
