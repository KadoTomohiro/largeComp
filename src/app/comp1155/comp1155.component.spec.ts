import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1155Component } from './comp1155.component';

describe('Comp1155Component', () => {
  let component: Comp1155Component;
  let fixture: ComponentFixture<Comp1155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
