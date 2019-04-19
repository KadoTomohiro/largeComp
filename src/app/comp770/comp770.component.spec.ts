import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp770Component } from './comp770.component';

describe('Comp770Component', () => {
  let component: Comp770Component;
  let fixture: ComponentFixture<Comp770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
