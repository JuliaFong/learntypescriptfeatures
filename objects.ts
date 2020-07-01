const profile = {
    name: 'jules',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age
    }
};
//Or you can update age like:
profile.age = 20

const { age }: { age: number } = profile;

const { 
    coords: { lat, lng }
}: { coords: { lat: number; lng: number} } = profile;