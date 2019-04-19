import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp817Component } from './comp817.component';

describe('Comp817Component', () => {
  let component: Comp817Component;
  let fixture: ComponentFixture<Comp817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
