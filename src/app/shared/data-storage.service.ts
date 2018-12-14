import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { DataService } from "../data/data.service";
import { Data } from "../data/data.model";
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private dataService: DataService) {}

    storeDatas() {
        return this.http.put('https://projectweb-4cfb6.firebaseio.com/data.json', this.dataService
        .getDatas());
    }

    getDatas() {
        this.http.get('https://projectweb-4cfb6.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    const datas: Data[] = response.json();
                    for (let data of datas){
                        if (!data['ingredients']) {
                            data['ingredients'] = [];
                        }
                    }
                    return datas;
                }
            )
            .subscribe(
                (datas: Data[]) => {
                    this.dataService.setDatas(datas);
                }
            );
    }
}