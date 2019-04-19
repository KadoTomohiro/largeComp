import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp372Component } from './comp372.component';

describe('Comp372Component', () => {
  let component: Comp372Component;
  let fixture: ComponentFixture<Comp372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
