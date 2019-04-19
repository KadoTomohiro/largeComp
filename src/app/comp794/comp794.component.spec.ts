import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp794Component } from './comp794.component';

describe('Comp794Component', () => {
  let component: Comp794Component;
  let fixture: ComponentFixture<Comp794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
