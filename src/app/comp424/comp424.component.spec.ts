import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp424Component } from './comp424.component';

describe('Comp424Component', () => {
  let component: Comp424Component;
  let fixture: ComponentFixture<Comp424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
