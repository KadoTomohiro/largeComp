import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp725Component } from './comp725.component';

describe('Comp725Component', () => {
  let component: Comp725Component;
  let fixture: ComponentFixture<Comp725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
