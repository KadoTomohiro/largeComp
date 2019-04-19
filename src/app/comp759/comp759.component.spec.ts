import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp759Component } from './comp759.component';

describe('Comp759Component', () => {
  let component: Comp759Component;
  let fixture: ComponentFixture<Comp759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
