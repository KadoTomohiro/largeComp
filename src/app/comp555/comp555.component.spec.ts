import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp555Component } from './comp555.component';

describe('Comp555Component', () => {
  let component: Comp555Component;
  let fixture: ComponentFixture<Comp555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
