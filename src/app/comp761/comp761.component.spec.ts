import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp761Component } from './comp761.component';

describe('Comp761Component', () => {
  let component: Comp761Component;
  let fixture: ComponentFixture<Comp761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
