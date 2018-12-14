import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Data } from '../data/data.model';
import { Ingredient } from '../shared/ingredient.model';
import { ArsipListService } from '../arsip-list/arsip-list.service';


@Injectable()
export class DataService {
  datasChanged = new Subject<Data[]>();


  //property:class data
  private datas:Data[]=[
    new Data('Prototype Robot Pemadam Api Berbasis Mikrokontroller Atmega 32','Prototype Robot Pemadam Api Berbasis Mikrokontroller Atmega 32. Oleh Mardiansyah, Program Study Teknik Elektronika, Jurusan Teknik Elektro, POLITEKNIK NEGERI PONTIANAK 2012'
    ,'https://image.slidesharecdn.com/1-halamanjudulpengesahanpernyataan-121010024734-phpapp02/95/1-halaman-judul-pengesahan-pernyataan-1-728.jpg?cb=1349837293',
    [
      new Ingredient('Proposal Laporan Akhir ',2011),
      new Ingredient('Fotokopi Proposal Laporan Akhir ',2011),
      new Ingredient('Alat Prototype Robot ',2011)
    ]),
    new Data('Daya Lentur Resilience Anak Asuh di Panti Sosial Asuhan Anak Yogyakarta Tahun 2011','Daya Lentur Resilience Anak Asuh di Panti Sosial Asuhan Anak Yogyakarta Tahun 2011. Oleh Hariyanto, Program Study Bimbingan Konseling. Psikologi Pendidikan dan Bimbingan, Fakultas Ilmu Pendidikan. Universitas Negeri Yogyakarta 2011','http://3.bp.blogspot.com/-B-jrIDCZkxg/UUTGNqq-4bI/AAAAAAAAALg/QlweCMeYUv0/s1600/Contoh+Proposal+Skripsi.jpg',
  [
      new Ingredient('Proposal Laporan Akhir ',2011),
      new Ingredient ('Fotokopi Proposal Laporan Akhir ', 2012),
  ]),];

  constructor(private slsService: ArsipListService){}
  
  setDatas(datas: Data[]) {
    this.datas = datas;
    this.datasChanged.next(this.datas.slice());
  }
  
  getDatas(){
    return this.datas.slice();
  }

  getData(index:number){
    return this.datas[index];
  }
  
  // tambahkan method addIngredientsArsipList dengan parameter ingredient[]
  addIngredientsToArsipList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  addData(data: Data){
    this.datas.push(data);
    this.datasChanged.next(this.datas.slice());
  }

  updateData(index: number, newData: Data){
    this.datas[index] = newData;
    this.datasChanged.next(this.datas.slice());
  }

  deleteData(index: number){
    this.datas.splice(index, 1);
    this.datasChanged.next(this.datas.slice());
  }
}
