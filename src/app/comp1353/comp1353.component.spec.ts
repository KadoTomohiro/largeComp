import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1353Component } from './comp1353.component';

describe('Comp1353Component', () => {
  let component: Comp1353Component;
  let fixture: ComponentFixture<Comp1353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
