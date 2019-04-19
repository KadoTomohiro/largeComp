import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp842Component } from './comp842.component';

describe('Comp842Component', () => {
  let component: Comp842Component;
  let fixture: ComponentFixture<Comp842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
