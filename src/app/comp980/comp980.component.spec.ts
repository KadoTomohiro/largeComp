import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp980Component } from './comp980.component';

describe('Comp980Component', () => {
  let component: Comp980Component;
  let fixture: ComponentFixture<Comp980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
