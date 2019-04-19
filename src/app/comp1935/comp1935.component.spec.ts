import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1935Component } from './comp1935.component';

describe('Comp1935Component', () => {
  let component: Comp1935Component;
  let fixture: ComponentFixture<Comp1935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
