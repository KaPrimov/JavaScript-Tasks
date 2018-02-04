import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAttackComponent } from './success-attack.component';

describe('SuccessAttackComponent', () => {
  let component: SuccessAttackComponent;
  let fixture: ComponentFixture<SuccessAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
