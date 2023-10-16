export class Todo {
  id?: number;
  summary: string;
  description: string;


  constructor(summary?: string, description?: string) {
    this.summary = summary || '';
    this.description = description || '';
  }
}
