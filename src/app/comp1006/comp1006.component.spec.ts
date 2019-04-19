import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1006Component } from './comp1006.component';

describe('Comp1006Component', () => {
  let component: Comp1006Component;
  let fixture: ComponentFixture<Comp1006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
