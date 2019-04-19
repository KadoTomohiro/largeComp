import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp721Component } from './comp721.component';

describe('Comp721Component', () => {
  let component: Comp721Component;
  let fixture: ComponentFixture<Comp721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
