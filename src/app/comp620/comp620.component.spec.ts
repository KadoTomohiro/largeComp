import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp620Component } from './comp620.component';

describe('Comp620Component', () => {
  let component: Comp620Component;
  let fixture: ComponentFixture<Comp620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
