import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp996Component } from './comp996.component';

describe('Comp996Component', () => {
  let component: Comp996Component;
  let fixture: ComponentFixture<Comp996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
