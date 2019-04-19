import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp911Component } from './comp911.component';

describe('Comp911Component', () => {
  let component: Comp911Component;
  let fixture: ComponentFixture<Comp911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
