import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp906Component } from './comp906.component';

describe('Comp906Component', () => {
  let component: Comp906Component;
  let fixture: ComponentFixture<Comp906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
