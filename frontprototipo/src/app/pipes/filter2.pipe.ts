import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {

    const resultPosts =[];
    for(const post of value){
    if(post.palabras.indexOf(arg)> -1){
    resultPosts.push(post);
    
    };
    
    };
    return resultPosts;
      }
    
    }