import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp251Component } from './comp251.component';

describe('Comp251Component', () => {
  let component: Comp251Component;
  let fixture: ComponentFixture<Comp251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
