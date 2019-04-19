import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp447Component } from './comp447.component';

describe('Comp447Component', () => {
  let component: Comp447Component;
  let fixture: ComponentFixture<Comp447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
