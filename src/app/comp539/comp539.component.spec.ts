import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp539Component } from './comp539.component';

describe('Comp539Component', () => {
  let component: Comp539Component;
  let fixture: ComponentFixture<Comp539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
