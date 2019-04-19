import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp796Component } from './comp796.component';

describe('Comp796Component', () => {
  let component: Comp796Component;
  let fixture: ComponentFixture<Comp796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
