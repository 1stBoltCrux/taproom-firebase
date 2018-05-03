import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegAddComponent } from './keg-add.component';

describe('KegAddComponent', () => {
  let component: KegAddComponent;
  let fixture: ComponentFixture<KegAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
