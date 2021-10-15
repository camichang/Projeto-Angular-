import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:3000/products'

  private productsSubject$: BehaviorSubject <Product[]> = new BehaviorSubject<Product[]>(null)

  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Product[]> {
    if(!this.loaded){
      this.http.get<Product[]>(this.url)
      .pipe(
        tap((prods)=> console.log(prods)), //faz um efeito colateral que emite uma notificacao, pra quando se deseja usar o modal do status
        delay(1000)
      )
      .subscribe(this.productsSubject$);
      this.loaded = true;
    }
    return this.productsSubject$.asObservable();
  }

  add(p: Product): Observable<Product>{
    return this.http.post<Product>(this.url, d)
    .pipe(
      tap((prod: Product)=> this.productsSubject$.getValue().push(prod))
    )
  }

  
  del(prod: Product): Observable<any> {
    return this.http.delete(`${this.url}/${prod._id}`)
      .pipe(
        tap(() => {
          let products = this.productsSubject$.getValue();
          let i = products.findIndex(p => p._id === prod._id);
          if (i >= 0)
            products.splice(i, 1); //remove 1 e adiciona outro
        })
      )
  }

  update(prod: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${prod._id}`, prod)
      .pipe(
        tap((p) => {
          let products = this.productsSubject$.getValue();
          let i = products.findIndex(p => p._id === prod._id);
          if (i >= 0)
            products[i].name = p.name;
        })
      )
  }

}







