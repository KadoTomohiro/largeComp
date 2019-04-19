import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp885Component } from './comp885.component';

describe('Comp885Component', () => {
  let component: Comp885Component;
  let fixture: ComponentFixture<Comp885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
