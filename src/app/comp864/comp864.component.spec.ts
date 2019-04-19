import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp864Component } from './comp864.component';

describe('Comp864Component', () => {
  let component: Comp864Component;
  let fixture: ComponentFixture<Comp864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
