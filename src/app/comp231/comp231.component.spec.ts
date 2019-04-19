import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp231Component } from './comp231.component';

describe('Comp231Component', () => {
  let component: Comp231Component;
  let fixture: ComponentFixture<Comp231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
