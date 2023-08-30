import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      // '/assets/images/foods/food-1.jpg',
      // '/assets/images/foods/food-2.jpg',
      // '/assets/images/foods/food-3.jpg',
      // '/assets/images/foods/food-5.jpg',
      // '/assets/images/foods/food-6.jpg',
      // '/assets/images/foods/food-7.jpg'
      {
        id:1,
        name:'Fried siomai',
        price:20,
        cookTime:'20-30',
        favorate:true,
        origins:['persia','middle east','china'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/food-1.jpg',
        tags:['SlowFood','Lunch'],
        
      },
      {
        id:2,
        name:'Chicken Wings',
        price:130,
        cookTime:'30-60',
        favorate:true,
        origins:['persia','middle east','china'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/food-2.jpg',
        tags:['SlowFood','Lunch'],
      
      },
      {
        id:3,
        name:'Shrimp soup',
        price:200,
        cookTime:'30-60',
        favorate:true,
        origins:['persia','middle east','china'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/food-3.jpg',
        tags:['SlowFood','Lunch'],
    
      },
      {
        id:5,
        name:'Pasta',
        price:150,
        cookTime:'20-30',
        favorate:true,
        origins:['persia','middle east','china'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/food-5.jpg',
        tags:['SlowFood','Lunch'],
        
      },
      {
        id:6,
        name:'Liver noodles',
        price:50,
        cookTime:'20-30',
        favorate:true,
        origins:['persia','middle east','china'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/food-6.jpg',
        tags:['SlowFood','Lunch'],

      },
      {
        id:7,
        name:'Special Ramen',
        price:70,
        cookTime:'20-30',
        favorate:true,
        origins:['persia','middle east','china'],
        stars: 4.5,
        imageUrl:'/assets/images/foods/food-7.jpg',
        tags:['SlowFood','Lunch'],

      }  
    ]
  }
}
