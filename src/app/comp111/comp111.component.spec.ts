import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp111Component } from './comp111.component';

describe('Comp111Component', () => {
  let component: Comp111Component;
  let fixture: ComponentFixture<Comp111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
