import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp985Component } from './comp985.component';

describe('Comp985Component', () => {
  let component: Comp985Component;
  let fixture: ComponentFixture<Comp985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
