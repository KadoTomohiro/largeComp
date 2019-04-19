import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1242Component } from './comp1242.component';

describe('Comp1242Component', () => {
  let component: Comp1242Component;
  let fixture: ComponentFixture<Comp1242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
