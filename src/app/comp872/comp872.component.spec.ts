import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp872Component } from './comp872.component';

describe('Comp872Component', () => {
  let component: Comp872Component;
  let fixture: ComponentFixture<Comp872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
