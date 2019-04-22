
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ShareDataService {

    private shoppingCart = new BehaviorSubject<any>(null);
    data = this.shoppingCart.asObservable();

    constructor() { }

    updatedDataSelection(data) {
        this.shoppingCart.next(data);
    }

}