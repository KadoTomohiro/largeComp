import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp444Component } from './comp444.component';

describe('Comp444Component', () => {
  let component: Comp444Component;
  let fixture: ComponentFixture<Comp444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
