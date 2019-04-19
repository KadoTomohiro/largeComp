import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp595Component } from './comp595.component';

describe('Comp595Component', () => {
  let component: Comp595Component;
  let fixture: ComponentFixture<Comp595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
