import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp508Component } from './comp508.component';

describe('Comp508Component', () => {
  let component: Comp508Component;
  let fixture: ComponentFixture<Comp508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
