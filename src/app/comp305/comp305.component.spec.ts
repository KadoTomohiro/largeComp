import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp305Component } from './comp305.component';

describe('Comp305Component', () => {
  let component: Comp305Component;
  let fixture: ComponentFixture<Comp305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
