import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp800Component } from './comp800.component';

describe('Comp800Component', () => {
  let component: Comp800Component;
  let fixture: ComponentFixture<Comp800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
