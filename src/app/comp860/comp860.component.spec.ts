import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp860Component } from './comp860.component';

describe('Comp860Component', () => {
  let component: Comp860Component;
  let fixture: ComponentFixture<Comp860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
