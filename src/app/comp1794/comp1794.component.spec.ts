import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1794Component } from './comp1794.component';

describe('Comp1794Component', () => {
  let component: Comp1794Component;
  let fixture: ComponentFixture<Comp1794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
