import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp709Component } from './comp709.component';

describe('Comp709Component', () => {
  let component: Comp709Component;
  let fixture: ComponentFixture<Comp709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
