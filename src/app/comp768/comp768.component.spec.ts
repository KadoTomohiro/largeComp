import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp768Component } from './comp768.component';

describe('Comp768Component', () => {
  let component: Comp768Component;
  let fixture: ComponentFixture<Comp768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
