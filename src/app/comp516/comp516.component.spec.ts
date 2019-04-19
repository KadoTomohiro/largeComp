import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp516Component } from './comp516.component';

describe('Comp516Component', () => {
  let component: Comp516Component;
  let fixture: ComponentFixture<Comp516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
