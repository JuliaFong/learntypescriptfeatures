import 'reflect-metadata'
@controller
class Plane {
    color: string = 'red';

    @get('/login')
    Fly(): void {
        console.log('vrrrrrr')
    }
}

function get(path: string) {
    return function(target: Plane, key: string) {
      Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
      const path =  Reflect.getMetadata('path', target.prototype, key);
      const middleware = Reflect.getMetadata('middleware', target.prototype)
     
      router.get(path, middleware, target.prototype[key]);
    }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')


//metadata secret information
// const plane = {
//     color: 'red'
// };


// Reflect.defineMetadata('note', 'hi there', plane)

// const note = Reflect.getMetadata('note', plane, 'color')


// // const note = Reflect.getMetadata('note', plane)
// // const height = Reflect.getMetadata('height', plane)
// // metadata lets us attach little pieces of information to an object
// //or attach information onto a property in an object

// console.log(note)
// console.log(height)