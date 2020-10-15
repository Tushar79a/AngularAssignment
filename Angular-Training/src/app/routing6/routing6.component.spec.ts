import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routing6Component } from './routing6.component';

describe('Routing6Component', () => {
  let component: Routing6Component;
  let fixture: ComponentFixture<Routing6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routing6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routing6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
