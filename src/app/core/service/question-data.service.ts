import {EventEmitter, Inject, Injectable, Type} from '@angular/core';
import {Http} from '@angular/http';

import {DataBo} from '../data/data-bo.model';
import {GroupBo} from '../data/group-bo.model';
import {QuestionBo} from '../data/question-bo.model';

import {DataType} from '../enum/data-type.enum';
import {questionDataLocation} from '../token/question-data-location.token';

@Injectable()
export class QuestionDataService {

  public readonly dataChanged: EventEmitter<void> = new EventEmitter<void>();
  public readonly objectAdded: EventEmitter<DataBo> = new EventEmitter<DataBo>();
  public readonly objectChanged: EventEmitter<DataBo> = new EventEmitter<DataBo>();

  public readonly dataList: DataBo[] = [];
  public readonly stretchedList: DataBo[] = [];

  private readonly groups: GroupBo[] = [];
  private readonly questions: QuestionBo[] = [];

  private readonly increment: number = 0.100;
  private readonly keyLength: number = 25;

  constructor(private readonly http: Http,
              @Inject(questionDataLocation)
              private readonly questionDataLocation: string) {
  }

  public addGroup(): void {
    const newGroup: GroupBo = this.createDataObj<GroupBo>(GroupBo);
    this.groups.push(newGroup);
    this.fillDataList();

    this.objectAdded.emit(newGroup);
  }

  public addQuestion(group?: GroupBo): void {
    const newQuestion: QuestionBo = this.createDataObj<QuestionBo>(QuestionBo);
    if (group) {
      newQuestion.group = group.key;
    }
    this.questions.push(newQuestion);
    this.fillDataList();

    this.objectAdded.emit(newQuestion);
  }

  public getObjByKey(key: string): DataBo | undefined {
    return this.dataList.find(dataObj => dataObj.key === key);
  }

  public async loadQuestions(): Promise<void> {
    // Needs to be a Promise because that's what APP_INITIALIZR expects
    await this.http.get(this.questionDataLocation)
    .map(response => response.json())
    .map(dataList => {
      dataList.forEach(dataEntry => this.parseDataEntry(dataEntry));
    })
    .toPromise();

    this.fillDataList();
  }

  private parseDataEntry(dataEntry: DataBo): void {
    if (dataEntry.type === DataType.Group) {
      this.groups.push(Object.assign(new GroupBo(), dataEntry));
    } else if (dataEntry.type === DataType.Question) {
      this.questions.push(Object.assign(new QuestionBo(), dataEntry));
    }
  }

  private fillDataList(): void {
    this.fillGroups();

    this.dataList.length = 0;
    this.dataList.push(...this.questions.filter(question => !question.group).concat(this.groups));

    this.sortData();

    this.dataChanged.emit();
  }

  private fillGroups(): void {
    this.groups.forEach(group => group.questions.length = 0);

    this.questions.filter(question => question.group).forEach(question => {
      const group: GroupBo = this.groups.find(groupSubj => groupSubj.key === question.group);
      if (group) {
        group.questions.push(question);
      }
    });

  }

  private sortData(): void {
    this.dataList.sort((a: DataBo, b: DataBo): number => a.order - b.order);
    this.dataList.filter(dataObj => dataObj.type === DataType.Group).forEach((group: GroupBo) => {
      group.questions.sort((a: DataBo, b: DataBo): number => a.order - b.order);
    });
    this.sortStretchedList();
  }

  private sortStretchedList(): void {
    this.stretchedList.length = 0;
    this.dataList.forEach(dataObj => {
      this.stretchedList.push(dataObj);
      if (dataObj instanceof GroupBo) {
        dataObj.questions.forEach(question => this.stretchedList.push(question));
      }
    });
  }

  private createDataObj<T extends DataBo>(type: Type<T>): T {
    const newObj: T = new type();
    newObj.order = this.getNextOrderIncrement();
    newObj.key = this.createRandomKey();
    return newObj;
  }

  private createRandomKey(): string {
    // pseudo
    let chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let length: number = chars.length;
    return Array.from({length: this.keyLength},
      x => chars.charAt(Math.floor(Math.random() * length))
    ).join('');
  }

  private getNextOrderIncrement(): number {
    const lastObj: DataBo = this.stretchedList[this.stretchedList.length - 1];
    return (lastObj && lastObj.order || 0) + this.increment;
  }
}
