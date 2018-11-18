export class User {
  username: string;
  group: string;
  constructor( jsonData: any ) {
    Object.assign(this, jsonData);
  }
}
