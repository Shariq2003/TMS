export class CreateTask {
  static readonly type = '[Tasks] Create'
constructor(public payload: any) {}
}
export class ReadTasks {
  static readonly type = '[Tasks] Read';
}
export class UpdateTask {
  static readonly type = '[Tasks] Update';
  constructor(public payload: { id: number; task: any }) {}
}
export class DeleteTask {
  static readonly type = '[Tasks] Delete';
    constructor(public payload: number) {}
}
