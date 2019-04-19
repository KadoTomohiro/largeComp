import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1337Component } from './comp1337.component';

describe('Comp1337Component', () => {
  let component: Comp1337Component;
  let fixture: ComponentFixture<Comp1337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
