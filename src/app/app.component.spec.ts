import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // Runs before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    component.todoItems = ['Walk dog', 'Study for exams'];
  });

  it('should add todo item', () => {
    // given
    const newItem = 'Watch movie';
    component.todoItem = newItem;

    // when
    component.addTodoItem();

    // then
    expect(component.todoItems).toContain(newItem);
  });

  it('should delete todo item', () => {
    // given
    const itemToDelete = 'Walk dog';

    // when
    component.deleteTodoItem(itemToDelete);

    // then
    expect(component.todoItems).not.toContain(itemToDelete);
  });
});
