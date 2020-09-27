import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFurnitureComponent } from './create-furniture.component';

describe('CreateFurnitureComponent', () => {
  let component: CreateFurnitureComponent;
  let fixture: ComponentFixture<CreateFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
