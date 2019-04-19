import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp981Component } from './comp981.component';

describe('Comp981Component', () => {
  let component: Comp981Component;
  let fixture: ComponentFixture<Comp981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
