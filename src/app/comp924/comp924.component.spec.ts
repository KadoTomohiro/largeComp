import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp924Component } from './comp924.component';

describe('Comp924Component', () => {
  let component: Comp924Component;
  let fixture: ComponentFixture<Comp924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
