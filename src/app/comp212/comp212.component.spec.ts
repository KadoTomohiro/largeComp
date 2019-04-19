import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp212Component } from './comp212.component';

describe('Comp212Component', () => {
  let component: Comp212Component;
  let fixture: ComponentFixture<Comp212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
