import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp976Component } from './comp976.component';

describe('Comp976Component', () => {
  let component: Comp976Component;
  let fixture: ComponentFixture<Comp976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
