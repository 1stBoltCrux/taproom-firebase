import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegListEditComponent } from './keg-list-edit.component';

describe('KegListEditComponent', () => {
  let component: KegListEditComponent;
  let fixture: ComponentFixture<KegListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
