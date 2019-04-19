import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp798Component } from './comp798.component';

describe('Comp798Component', () => {
  let component: Comp798Component;
  let fixture: ComponentFixture<Comp798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
