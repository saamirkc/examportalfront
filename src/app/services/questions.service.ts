import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _http:HttpClient) { }
  public getQuestions(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }
  public getQuestionsForTest(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  //add question
  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/question/`,question);
  }
  //delete question
  public deleteQuestion(questionId:any){
    return this._http.delete(`${baseUrl}/question/${questionId}`);
  }

}
