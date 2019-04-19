import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1681Component } from './comp1681.component';

describe('Comp1681Component', () => {
  let component: Comp1681Component;
  let fixture: ComponentFixture<Comp1681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
