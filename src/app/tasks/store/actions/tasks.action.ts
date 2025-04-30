export class CreateTask {
  static readonly type = '[Tasks] Create'
  constructor(public task: any) {}
}
export class ReadTasks {
  static readonly type = '[Tasks] Read';
}
export class UpdateTask {
  static readonly type = '[Tasks] Update';
  constructor(public payload: { id: string; task: any }) {}
}
export class DeleteTask {
  static readonly type = '[Tasks] Delete';
  constructor(public id: string) {}
}
