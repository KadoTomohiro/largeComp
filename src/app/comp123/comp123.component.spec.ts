import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp123Component } from './comp123.component';

describe('Comp123Component', () => {
  let component: Comp123Component;
  let fixture: ComponentFixture<Comp123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
