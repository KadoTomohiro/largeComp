import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1984Component } from './comp1984.component';

describe('Comp1984Component', () => {
  let component: Comp1984Component;
  let fixture: ComponentFixture<Comp1984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
