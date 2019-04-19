import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp922Component } from './comp922.component';

describe('Comp922Component', () => {
  let component: Comp922Component;
  let fixture: ComponentFixture<Comp922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
