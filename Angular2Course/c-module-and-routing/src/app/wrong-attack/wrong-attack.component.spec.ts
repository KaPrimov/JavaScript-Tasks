import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAttackComponent } from './wrong-attack.component';

describe('WrongAttackComponent', () => {
  let component: WrongAttackComponent;
  let fixture: ComponentFixture<WrongAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongAttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
