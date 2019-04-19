import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1342Component } from './comp1342.component';

describe('Comp1342Component', () => {
  let component: Comp1342Component;
  let fixture: ComponentFixture<Comp1342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
