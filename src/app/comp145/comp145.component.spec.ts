import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp145Component } from './comp145.component';

describe('Comp145Component', () => {
  let component: Comp145Component;
  let fixture: ComponentFixture<Comp145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
