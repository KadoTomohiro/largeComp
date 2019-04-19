import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp475Component } from './comp475.component';

describe('Comp475Component', () => {
  let component: Comp475Component;
  let fixture: ComponentFixture<Comp475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
