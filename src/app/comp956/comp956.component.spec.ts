import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp956Component } from './comp956.component';

describe('Comp956Component', () => {
  let component: Comp956Component;
  let fixture: ComponentFixture<Comp956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
