import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp972Component } from './comp972.component';

describe('Comp972Component', () => {
  let component: Comp972Component;
  let fixture: ComponentFixture<Comp972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
